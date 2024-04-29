import React from "react";
import './App.css'

const MainContent = () => {
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
			<button id="decrease" onclick="decrease()">-</button>
			<span id="length-input">0</span>
			<button id="increase" onclick="increase()">+</button>
		</div>
		<div className="toggle-btns">
			<button id="generate-btn" onclick="generatePass()">Generate password</button>
			<button id="clear" onclick="clearInputField()">Clear</button>
		</div>

		<div className="passwords">
			<input type="text" placeholder="Password  #1" id="password1" readonly />
			<input type="text" placeholder="Password  #2" id="password2" readonly />
		</div>
		<div className="copy-btns">
			<button id="copy1" onclick="copyToClipboardOne()">copy</button>
			<button id="copy2" onclick="copyToClipboardTwo()">copy</button>
		</div>
		</div>
    )
}

export default MainContent