#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:",
    validate: function (value) {
        if (value.trim() !== "") {
            return true;
        }
        return "Please enter the your name";
    },
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Zombie", "Dragon"]
});
let player1 = new Player(player.name);
let opponent1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select an option",
            choices: ["Attack", "Drink Portion", "Run for your life..."]
        });
        if (ask.options === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDecrease();
                console.log(chalk.bold.red(`${player1.name} fuel = ${player1.fuel}`));
                console.log(chalk.bold.green(`${opponent1.name} fuel = ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You lose, Better Luck Next Time"));
                    process.exit();
                }
            }
            else {
                opponent1.fuelDecrease();
                console.log(chalk.bold.red(`${opponent1.name} fuel = ${opponent1.fuel}`));
                console.log(chalk.bold.green(`${player1.name} fuel = ${player1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.options === "Drink Portion") {
            player1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${player1.name} fuel = ${player1.fuel}`));
        }
        if (ask.options === "Run for your life...") {
            console.log(chalk.bold.italic.red("You lose, Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select an option",
            choices: ["Attack", "Drink Portion", "Run for your life..."]
        });
        if (ask.options === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDecrease();
                console.log(chalk.bold.red(`${player1.name} fuel = ${player1.fuel}`));
                console.log(chalk.bold.green(`${opponent1.name} fuel = ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You lose, Better Luck Next Time"));
                    process.exit();
                }
            }
            else {
                opponent1.fuelDecrease();
                console.log(chalk.bold.red(`${opponent1.name} fuel = ${opponent1.fuel}`));
                console.log(chalk.bold.green(`${player1.name} fuel = ${player1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.options === "Drink Portion") {
            player1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${player1.name} fuel = ${player1.fuel}`));
        }
        if (ask.options === "Run for your life...") {
            console.log(chalk.bold.italic.red("You lose, Better Luck Next Time"));
            process.exit();
        }
    }
    if (opponent.select === "Dragon") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "options",
            message: "Select an option",
            choices: ["Attack", "Drink Portion", "Run for your life..."]
        });
        if (ask.options === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDecrease();
                console.log(chalk.bold.red(`${player1.name} fuel = ${player1.fuel}`));
                console.log(chalk.bold.green(`${opponent1.name} fuel = ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            else {
                opponent1.fuelDecrease();
                console.log(chalk.bold.red(`${opponent1.name} fuel = ${opponent1.fuel}`));
                console.log(chalk.bold.green(`${player1.name} fuel = ${player1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.options === "Drink Portion") {
            player1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${player1.name} fuel = ${player1.fuel}`));
        }
        if (ask.options === "Run for your life...") {
            console.log(chalk.bold.italic.red("You lose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
