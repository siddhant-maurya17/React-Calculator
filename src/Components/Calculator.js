import React, { useState } from "react";
import "../App.css";

const Calculator = () => {
    // State variables to store input values, result, message, and show state
    let [num1, setNum1] = useState("");
    let [num2, setNum2] = useState("");
    let [ans, setAns] = useState("");
    let [message, setMessage] = useState("");
    let [show, setShow] = useState(false);

    // Function to handle Addition
    function handleAdd() {
        if (num1 === "" || num2 === "") {
            setMessage("Error!");
            setAns("");
            setShow(false);
        } else {
            setMessage("Success!");
            setAns(Number.parseInt(num1) + Number.parseInt(num2));
            setShow(true);
        }
    }

    // Function to handle Subtraction
    function handleSub() {
        if (num1 === "" || num2 === "") {
            setMessage("Error!");
            setAns("");
            setShow(false);
        } else {
            setMessage("Success!");
            setAns(num1 - num2);
            setShow(true);
        }
    }

    // Function to handle Multiplication
    function handleMult() {
        if (num1 === "" || num2 === "") {
            setMessage("Error!");
            setAns("");
            setShow(false);
        } else {
            setMessage("Success!");
            setAns(num1 * num2);
            setShow(true);
        }
    }

    // Function to handle Division
    function handleDiv() {
        if (num1 === "" || num2 === "") {
            setMessage("Error!");
            setAns("");
            setShow(false);
        } else if (num2 === "0") {
            setMessage("Error!");
            setAns("");
            setShow(false);
        } else {
            setMessage("Success!");
            setAns(num1 / num2);
            setShow(true);
        }
    }

    return (
        <div className="container">
            <h2>React Calculator</h2>
            {/* Input fields */}
            <input className="num1" type="number" placeholder="Num 1" value={num1} onChange={(e) => setNum1(e.target.value)} /><br />
            <input className="num2" type="number" placeholder="Num 2" value={num2} onChange={(e) => setNum2(e.target.value)} /><br />

            {/* Operator buttons */}
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
            <button onClick={handleMult}>*</button>
            <button onClick={handleDiv}>/</button>
            
            {/* Message stored in useState to show appropriate feedback */}
            <p className={message.includes("Error!") ? "error" : "success"}>
                {message}
            </p>
            
            {/* Conditional rendering for error or result messages */}
            {message.includes("Error!") ? (
                // Display specific error message based on conditions
                <p>{num2 === "0" ? "Num 2 Cannot Be Zero" :(num1==="" && num2==="" ?"Num1 and Num2 Both are Empty":num1 === "" ? "Num 1 Cannot Be Empty" : "Num 2 Cannot Be Empty")}</p>
            ) : (
                // Display result if there's no error and show state is true
                show && <p>Result - {ans}</p>
            )}
        </div>
    )
}

export default Calculator;
