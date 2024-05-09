import React from "react";
import './App.css'

const MainContent = () => {

	let button = document.getElementById('button');
let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let clearBtn = document.getElementById('clear');

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Clear input fields

function clearInputField() {
	passwordOne.value = '';
	passwordTwo.value = '';
}
// Adjust length of password

let fullLength = 0;

let lengthInput = document.getElementById('lengthinput');

let increaseBtn = document.getElementById('increase');

let decreaseBtn = document.getElementById('decrease');

function increase() {
	if(lengthInput.textContent === "20"){
		increaseBtn.disable = true;
	} else {
		fullLength += 1;
	lengthInput.textContent = fullLength;
	}
}
function decrease() {
if(lengthInput.textContent === "0"){
	decreaseBtn.disable = true;
} else {
   fullLength -= 1;
	lengthInput.textContent = fullLength; 
	}
}
// Generate random password for input 1 and input 2

function generatePass() {
	let numberValue = lengthInput.textContent;
	
	let displayPassword = characters.slice(0, numberValue);
	
	
	passwordOne.value = '';
	passwordTwo.value = '';
	
	if(lengthInput.textContent >= "1"){
	  for(let i = 0; i < displayPassword.length; i++){
		
		let inputOne = Math.floor(Math.random() * characters.length);
		let inputTwo = Math.floor(Math.random() * characters.length);

		passwordOne.value += characters[inputOne];
		passwordTwo.value += characters[inputTwo];

	}  
	} else {
		alert("Add a password length")
	}
};

// Copy buttons under input fields 

let copyOne = document.getElementById('copy1');
let copyTwo = document.getElementById('copy2');



// Function to allow user to copy password to clipboard for input 1

function copyToClipboardOne() {
	if(lengthInput.textContent >= "1") {
	passwordOne.select();
	
	passwordOne.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(passwordOne.value)

	alert("Password 1 copied")
} else {
	alert("Add a password length")
}
	
}

// Function to allow user to copy password to clipboard for input 2

function copyToClipboardTwo() {
	if(lengthInput.textContent >= "1") {
   passwordTwo.select;

	passwordTwo.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(passwordTwo.value);

	alert("Password 2 copied"); 
} else {
	alert("Add a password length");
}

} 

    return (
        <div className="wrapper">
			<div className="heading">
				<h1>Generate a<br /><span>secure password</span></h1>
			</div>
		<div className="subheading">
			<h2>Have a choice of 2 secure passwords to protect your privacy</h2>
		</div>
				<div className="password-length">
				<h3 className="pass-text">Password length</h3>
			<button id="decrease" onClick="decrease()">-</button>
			<span id="length-input">0</span>
			<button id="increase" onClick="increase()">+</button>
		</div>
		<div className="toggle-btns">
			<button id="generate-btn" onClick="generatePass()">Generate password</button>
			<button id="clear" onClick="clearInputField()">Clear</button>
		</div>

		<div className="passwords">
			<input type="text" placeholder="Password  #1" id="password1" readonly />
			<input type="text" placeholder="Password  #2" id="password2" readonly />
		</div>
		<div className="copy-btns">
			<button id="copy1" onClick="copyToClipboardOne()">copy</button>
			<button id="copy2" onClick="copyToClipboardTwo()">copy</button>
		</div>
		</div>
    )
}

export default MainContent