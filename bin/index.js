#!/usr/bin/env node

// import module to change text colours
const colors = require('colors');
//importing converter script from lib directory
const converter = require("../lib/converter");
//import module to allow user input from console
const prompt = require('prompt-sync')({sigint: true});

// variable to determine whether user has finished using program
let conversionCompleted = false


// print greeting and instructions
console.log(
    "===================",
    //wraps text in blue color formatting
    colors.blue(
        // returns the greeting
        "Welcome to Atheer's Unit Conversion CLI"
    ),
    "===================",
    "\n",
    "Using this program you can convert measurments into different units.",
    "\n",
    "Currently this program supports the following unit conversions:",
    "\n",
    colors.green(
        "cm <=> m"
    ),
    "\n",
    "To carry out a conversion simply enter the conversion you would like to make",
    "\n",
    colors.blue.bold("Example:"),
    "33 m in cm",
    "\n"
);

// while loop allowing user to make multiple conversions
while (!conversionCompleted) {
    // Get user input
    let conversionQuery = prompt('Please enter the the conversion you would like to make: ');

    // Carries out converter funtion imported from converter.js
    console.log(colors.green(converter.converterFunc(conversionQuery)))
   
    // Ask user if they want to make another conversion
    let exitQuery = prompt('Would you like to carry out another conversion? y/n:  ')
    if (exitQuery === 'n') {
        conversionCompleted = true
    }
  }

