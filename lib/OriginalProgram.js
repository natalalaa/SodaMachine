"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rl = __importStar(require("readline"));
var Machine;
(function (Machine) {
    var SodaMachine = /** @class */ (function () {
        function SodaMachine() {
            var _this = this;
            // Espen : Removed static to simplify testing
            this.money = 0;
            this.readline = rl.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            /// <summary>
            /// This is the starter method for the machine
            /// </summary>
            this.start = function () {
                var inventory = [{ name: "coke", nr: 5 }, { name: "sprite", nr: 3 }, { name: "fanta", nr: 3 }];
                while (true) {
                    // Espen : Reformatted to \r\n to simplify testing
                    console.log("Available commands:");
                    console.log("insert (money) - Money put into money slot");
                    console.log("order (coke, sprite, fanta) - Order from machines buttons");
                    console.log("sms order (coke, sprite, fanta) - Order sent by sms");
                    console.log("recall - gives money back");
                    console.log("-------");
                    console.log("Inserted money: " + _this.money);
                    console.log("-------\r\n\r\n");
                    _this.readline.question('', function (input) {
                        // Espen : Added to simplify testing
                        if (input == "quit")
                            _this.readline.close();
                        if (input.startsWith("insert")) {
                            //Add to credit
                            _this.money += parseInt(input.split(' ')[1]);
                            console.log("Adding " + parseInt(input.split(' ')[1]) + " to credit");
                        }
                        if (input.startsWith("order")) {
                            // split string on space
                            var csoda = input.split(' ')[1];
                            //Find out witch kind
                            switch (csoda) {
                                case "coke":
                                    var coke = inventory[0];
                                    if (coke.name == csoda && _this.money > 19 && coke.nr > 0) {
                                        console.log("Giving coke out");
                                        _this.money -= 20;
                                        console.log("Giving " + _this.money + " out in change");
                                        _this.money = 0;
                                        coke.nr--;
                                    }
                                    else if (coke.name == csoda && coke.nr == 0) {
                                        console.log("No coke left");
                                    }
                                    else if (coke.name == csoda) {
                                        console.log("Need " + (20 - _this.money) + " more");
                                    }
                                    break;
                                case "fanta":
                                    var fanta = inventory[2];
                                    if (fanta.name == csoda && _this.money > 14 && fanta.nr >= 0) {
                                        console.log("Giving fanta out");
                                        _this.money -= 15;
                                        console.log("Giving " + _this.money + " out in change");
                                        _this.money = 0;
                                        fanta.nr--;
                                    }
                                    else if (fanta.name == csoda && fanta.nr == 0) {
                                        console.log("No fanta left");
                                    }
                                    else if (fanta.name == csoda) {
                                        console.log("Need " + (15 - _this.money) + " more");
                                    }
                                    break;
                                case "sprite":
                                    var sprite = inventory[1];
                                    if (sprite.name == csoda && _this.money > 14 && sprite.nr > 0) {
                                        console.log("Giving sprite out");
                                        _this.money -= 15;
                                        console.log("Giving " + _this.money + " out in change");
                                        _this.money = 0;
                                        sprite.nr--;
                                    }
                                    else if (sprite.name == csoda && sprite.nr == 0) {
                                        console.log("No sprite left");
                                    }
                                    else if (sprite.name == csoda) {
                                        console.log("Need " + (15 - _this.money) + " more");
                                    }
                                    break;
                                default:
                                    console.log("No such soda");
                                    break;
                            }
                        }
                        if (input.startsWith("sms order")) {
                            var csoda = input.split(' ')[2];
                            //Find out witch kind
                            switch (csoda) {
                                case "coke":
                                    if (inventory[0].nr > 0) {
                                        console.log("Giving coke out");
                                        inventory[0].nr--;
                                    }
                                    break;
                                case "sprite":
                                    if (inventory[1].nr > 0) {
                                        console.log("Giving sprite out");
                                        inventory[1].nr--;
                                    }
                                    break;
                                case "fanta":
                                    if (inventory[2].nr > 0) {
                                        console.log("Giving fanta out");
                                        inventory[2].nr--;
                                    }
                                    break;
                            }
                        }
                        if (input == "recall") {
                            //Give money back
                            console.log("Returning " + _this.money + " to customer");
                            _this.money = 0;
                        }
                        //this.readline.close();
                    });
                }
            };
        }
        return SodaMachine;
    }());
})(Machine || (Machine = {}));
