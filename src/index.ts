#!/usr/bin/env node
import * as rl from 'readline';
import chalk from 'chalk';
import clear from 'clear';
import * as figlet from 'figlet';

namespace Machine {
    export class SodaMachine {
        private money: number = 0;

        /// <summary>
        /// This is the starter method for the machine
        /// </summary>
        public start = async () => {
            var inventory: Soda[] = [
                { name: "coke", nr: 5, price: 20 }, 
                { name: "sprite", nr: 3, price: 15 }, 
                { name: "fanta", nr: 3, price: 15 }
            ];

            while (true) {
                console.log("\r\n");
                console.log("Available commands:");
                console.log("insert (money) - Money put into money slot");
                console.log("order (coke, sprite, fanta) - Order from machines buttons");
                console.log("sms order (coke, sprite, fanta) - Order sent by sms");
                console.log("recall - gives money back");
                console.log("quit  - If you wish to quit");
                console.log("-------");
                console.log("Inserted money: " + this.money);
                console.log("-------\r\n\r\n");

                const readline = rl.createInterface({
                    input: process.stdin,
                    //output: process.stdout
                })

                const input:string = await new Promise<string>(resolve => readline.question('', input => {
                    readline.close()
                    resolve(input)
                }))

                if (input == "quit") {
                    process.exit()
                }

                if (input.startsWith("insert")) {
                    //Add to credit
                    this.money += parseInt(input.split(' ')[1]);
                    console.log("Adding " + parseInt(input.split(' ')[1]) + " to credit");
                }

                if (input.startsWith("order")) {
                    // split string on space
                    var csoda = input.split(' ')[1];
                    const index = inventory.map(e => e.name).indexOf(csoda);

                    if (index >= 0){
                        const soda: Soda = inventory[index];
                        if (this.money >= soda.price && soda.nr > 0) {
                            console.log("Giving " + soda.name + " out");
                            this.money -= soda.price;
                            console.log("Giving " + this.money + " out in change");
                            this.money = 0;
                            soda.nr--;
                        }
                        else if (soda.nr == 0) {
                            console.log("No " + soda.name + " left");
                        }
                        else {
                            console.log("Need " + (soda.price - this.money) + " more to buy " + soda.name);
                        }
                    } else {
                        console.log("No such soda");
                        console.log("-------");
                    }
                }
                
                if (input.startsWith("sms order")) {
                    // split string on space
                    var csoda = input.split(' ')[2];
                    const index = inventory.map(e => e.name).indexOf(csoda);
                   
                    if (index >= 0){
                        const soda: Soda = inventory[index];
                        if (soda.nr > 0) {
                            console.log("Giving " + soda.name + " out");
                            soda.nr--;
                        }
                    } else {
                        console.log("No such soda");
                        console.log("-------");
                    }
                }

                if (input == "recall") {
                    //Give money back
                    console.log("Returning " + this.money + " to customer");
                    this.money = 0;
                }
            }
        }
    }

    interface Soda {
        name: string;
        nr: number;
        price: number;
    }
}

clear();
console.log(
    chalk.red(
        figlet.textSync('sodamachine', { horizontalLayout: 'full' })
    )
);

new Machine.SodaMachine().start();
