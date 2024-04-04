import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
			<div className="heading">
				<h1>Generate a<br /><span>secure password</span></h1>
			</div>
		<div className="subheading">
			<h2>Have a choice of 2 secure passwords to protect your privacy</h2>
		</div>
				<div className="passwordlength">
				<h3 className="pass_text">Password length</h3>
			<button id="decrease" onclick="decrease()">-</button>
			<span id="lengthinput">0</span>
			<button id="increase" onclick="increase()">+</button>
		</div>
		<div className="btn">
			<button id="button" onclick="generatePass()">Generate password</button>
			<button id="clear" onclick="clearInputField()">Clear</button>
		</div>

		<div className="passwords">
			<input type="text" placeholder="password 1" id="password1" readonly />
			<input type="text" placeholder="password 2" id="password2" readonly />
		</div>
		<div className="copybtn">
			<button id="copy1" onclick="copyToClipboardOne()">copy</button>
			<button id="copy2" onclick="copyToClipboardTwo()">copy</button>
		</div>
		</div>
  )
}

export default App
