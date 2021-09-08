#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rl = __importStar(require("readline"));
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet = __importStar(require("figlet"));
var Machine;
(function (Machine) {
    var SodaMachine = /** @class */ (function () {
        function SodaMachine() {
            var _this = this;
            this.money = 0;
            /// <summary>
            /// This is the starter method for the machine
            /// </summary>
            this.start = function () { return __awaiter(_this, void 0, void 0, function () {
                var inventory, _loop_1, this_1, csoda, csoda;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            inventory = [
                                { name: "coke", nr: 5, price: 20 },
                                { name: "sprite", nr: 3, price: 15 },
                                { name: "fanta", nr: 3, price: 15 }
                            ];
                            _loop_1 = function () {
                                var readline, input, index, soda, index, soda;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("\r\n");
                                            console.log("Available commands:");
                                            console.log("insert (money) - Money put into money slot");
                                            console.log("order (coke, sprite, fanta) - Order from machines buttons");
                                            console.log("sms order (coke, sprite, fanta) - Order sent by sms");
                                            console.log("recall - gives money back");
                                            console.log("quit  - If you wish to quit");
                                            console.log("-------");
                                            console.log("Inserted money: " + this_1.money);
                                            console.log("-------\r\n\r\n");
                                            readline = rl.createInterface({
                                                input: process.stdin,
                                            });
                                            return [4 /*yield*/, new Promise(function (resolve) { return readline.question('', function (input) {
                                                    readline.close();
                                                    resolve(input);
                                                }); })];
                                        case 1:
                                            input = _a.sent();
                                            if (input == "quit") {
                                                process.exit();
                                            }
                                            if (input.startsWith("insert")) {
                                                //Add to credit
                                                this_1.money += parseInt(input.split(' ')[1]);
                                                console.log("Adding " + parseInt(input.split(' ')[1]) + " to credit");
                                            }
                                            if (input.startsWith("order")) {
                                                // split string on space
                                                csoda = input.split(' ')[1];
                                                index = inventory.map(function (e) { return e.name; }).indexOf(csoda);
                                                if (index >= 0) {
                                                    soda = inventory[index];
                                                    if (this_1.money >= soda.price && soda.nr > 0) {
                                                        console.log("Giving " + soda.name + " out");
                                                        this_1.money -= soda.price;
                                                        console.log("Giving " + this_1.money + " out in change");
                                                        this_1.money = 0;
                                                        soda.nr--;
                                                    }
                                                    else if (soda.nr == 0) {
                                                        console.log("No " + soda.name + " left");
                                                    }
                                                    else {
                                                        console.log("Need " + (soda.price - this_1.money) + " more to buy " + soda.name);
                                                    }
                                                }
                                                else {
                                                    console.log("No such soda");
                                                    console.log("-------");
                                                }
                                            }
                                            if (input.startsWith("sms order")) {
                                                // split string on space
                                                csoda = input.split(' ')[2];
                                                index = inventory.map(function (e) { return e.name; }).indexOf(csoda);
                                                if (index >= 0) {
                                                    soda = inventory[index];
                                                    if (soda.nr > 0) {
                                                        console.log("Giving " + soda.name + " out");
                                                        soda.nr--;
                                                    }
                                                }
                                                else {
                                                    console.log("No such soda");
                                                    console.log("-------");
                                                }
                                            }
                                            if (input == "recall") {
                                                //Give money back
                                                console.log("Returning " + this_1.money + " to customer");
                                                this_1.money = 0;
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _a.label = 1;
                        case 1:
                            if (!true) return [3 /*break*/, 3];
                            return [5 /*yield**/, _loop_1()];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        }
        return SodaMachine;
    }());
    Machine.SodaMachine = SodaMachine;
})(Machine || (Machine = {}));
clear_1.default();
console.log(chalk_1.default.red(figlet.textSync('sodamachine', { horizontalLayout: 'full' })));
new Machine.SodaMachine().start();
