import React,{useState} from "react";
import "../App.css";
const Calculator=()=>{

    let [num1,setNum1]=useState("");
    let [num2,setNum2]=useState("");
    let [ans,setAns]=useState("");
    let [message,setMessage]=useState("");


    function handleAdd(){
        if(num1==="" || num2===""){
            setMessage("Error");
            setAns("");
        }else{
        setMessage("Success");
        setAns(Number.parseInt(num1)+Number.parseInt(num2))
        }
    }
    function handleSub(){
        if(num1==="" || num2===""){
            setMessage("Error");
            setAns("");
        }else{
        setMessage("Success");
        setAns(num1-num2)
        }
    }
    function handleMult(){
        if(num1==="" || num2===""){
            setMessage("Error");
            setAns("");
        }else{
        setMessage("Success");
        setAns(num1*num2)
        }
    }
    function handleDiv(){
        if(num1==="" || num2===""){
            setMessage("Error");
            setAns("");
        }else{
        setMessage("Success");
        setAns(num1/num2)
        }
    }

    return (
        <div className="container">
             <h2>React Calculator</h2>
             <input className="num1" type="number" placeholder="Num 1" value={num1} onChange={(e)=>setNum1(e.target.value)}/><br/>
             <input className="num2" type="number" placeholder="Num 2" value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>
             <button onClick={handleAdd}>+</button>
             <button onClick={handleSub}>-</button>
             <button onClick={handleMult}>*</button>
             <button onClick={handleDiv}>/</button>
             <p className={message.includes("Error") ? "error" : "success"}>
                {message}
            </p>
            <p>Result - {ans}</p>
        </div>
    )
}

export default Calculator;