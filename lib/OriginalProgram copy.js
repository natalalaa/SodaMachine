"use strict";
// namespace Machine
// {
//     public class SodaMachine
//     {
//         // Espen : Removed static to simplify testing
//         private money: number = 0;
//         /// <summary>
//         /// This is the starter method for the machine
//         /// </summary>
//         public start = () =>
//         {
//             var inventory = [ { name = "coke", nr = 5 }, { name = "sprite", nr = 3 }, { name = "fanta", nr = 3 } ];
//             while (true)
//             {
//                 // Espen : Reformatted to \r\n to simplify testing
//                 console.log("Available commands:");
//                 console.log("insert (money) - Money put into money slot");
//                 console.log("order (coke, sprite, fanta) - Order from machines buttons");
//                 console.log("sms order (coke, sprite, fanta) - Order sent by sms");
//                 console.log("recall - gives money back");
//                 console.log("-------");
//                 console.log("Inserted money: " + this.money);
//                 console.log("-------\r\n\r\n");
//                 var input = Console.ReadLine();
//                 // Espen : Added to simplify testing
//                 if (input.Equals("quit", StringComparison.CurrentCultureIgnoreCase))
//                     break;
//                 if (input.StartsWith("insert"))
//                 {
//                     //Add to credit
//                     this.money += int.Parse(input.Split(' ')[1]);
//                     console.log("Adding " + int.Parse(input.Split(' ')[1]) + " to credit");
//                 }
//                 if (input.StartsWith("order"))
//                 {
//                     // split string on space
//                     var csoda = input.Split(' ')[1];
//                     //Find out witch kind
//                     switch (csoda)
//                     {
//                         case "coke":
//                             var coke = inventory[0];
//                             if (coke.Name == csoda && this.money > 19 && coke.Nr > 0)
//                             {
//                                 console.log("Giving coke out");
//                                 this.money -= 20;
//                                 console.log("Giving " + this.money + " out in change");
//                                 this.money = 0;
//                                 coke.Nr--;
//                             }
//                             else if (coke.Name == csoda && coke.Nr == 0)
//                             {
//                                 console.log("No coke left");
//                             }
//                             else if (coke.Name == csoda)
//                             {
//                                 console.log("Need " + (20 - this.money) + " more");
//                             }
//                             break;
//                         case "fanta":
//                             var fanta = inventory[2];
//                             if (fanta.Name == csoda && this.money > 14 && fanta.Nr >= 0)
//                             {
//                                 console.log("Giving fanta out");
//                                 this.money -= 15;
//                                 console.log("Giving " + this.money + " out in change");
//                                 this.money = 0;
//                                 fanta.Nr--;
//                             }
//                             else if (fanta.Name == csoda && fanta.Nr == 0)
//                             {
//                                 console.log("No fanta left");
//                             }
//                             else if (fanta.Name == csoda)
//                             {
//                                 console.log("Need " + (15 - this.money) + " more");
//                             }
//                             break;
//                         case "sprite":
//                             var sprite = inventory[1];
//                             if (sprite.Name == csoda && this.money > 14 && sprite.Nr > 0)
//                             {
//                                 console.log("Giving sprite out");
//                                 this.money -= 15;
//                                 console.log("Giving " + this.money + " out in change");
//                                 this.money = 0;
//                                 sprite.Nr--;
//                             }
//                             else if (sprite.Name == csoda && sprite.Nr == 0)
//                             {
//                                 console.log("No sprite left");
//                             }
//                             else if (sprite.Name == csoda)
//                             {
//                                 console.log("Need " + (15 - this.money) + " more");
//                             }
//                             break;
//                         default:
//                             console.log("No such soda");
//                             break;
//                     }
//                 }
//                 if (input.StartsWith("sms order"))
//                 {
//                     var csoda = input.Split(' ')[2];
//                     //Find out witch kind
//                     switch (csoda)
//                     {
//                         case "coke":
//                             if (inventory[0].Nr > 0)
//                             {
//                                 console.log("Giving coke out");
//                                 inventory[0].Nr--;
//                             }
//                             break;
//                         case "sprite":
//                             if (inventory[1].Nr > 0)
//                             {
//                                 console.log("Giving sprite out");
//                                 inventory[1].Nr--;
//                             }
//                             break;
//                         case "fanta":
//                             if (inventory[2].Nr > 0)
//                             {
//                                 console.log("Giving fanta out");
//                                 inventory[2].Nr--;
//                             }
//                             break;
//                     }
//                 }
//                 if (input.Equals("recall"))
//                 {
//                     //Give money back
//                     console.log("Returning " + this.money + " to customer");
//                     money = 0;
//                 }
//             }
//         }
//     }
//     interface Soda
//     {
//       name: string;
//       nr: number;
//     }
// }
