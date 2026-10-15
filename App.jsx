import React from "react";
import Die from"/Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti-boom';


export default function App(){
    const [Dice,setDice]=React.useState(()=>generateContent())
    function generateContent(){
        return new Array(10).fill(0).map(() => ({
            value:Math.ceil(Math.random() * 6),
            isHeld:false,
            id:nanoid()
        }))
    }
    const isHeldAll=Dice.every(diceHeld=>diceHeld.isHeld)
    const allSum= Dice.every(die=>die.value===Dice[0].value)
    const wining=isHeldAll&&allSum



    const diceElement=Dice.map((num,index)=><Die 
    key={num.id} 
    value={num.value} 
    isHeld={num.isHeld}
    hold={()=>hold(num.id)}
    />)
    function hold(id){
        setDice(prev=>prev.map(die=>{return die.id===id?{...die,isHeld:!die.isHeld}:die}
    ))
    }
    function regengate(){
        if(!wining){
        setDice(setHeld=>setHeld.map(held=>
            held.isHeld?held:{...held,value:Math.ceil(Math.random() * 6)}))}
            else{setDice(generateContent())}
    }

    return(
        <>
        {wining&&<Confetti mode="rain" particleCount={10} colors={['#ff577f', '#ffffff']} />}
        <div className="rootBox">
            {diceElement}
        </div>
        <div>
            <button onClick={regengate} className="rollButton" >{wining?"New Game":"Roll"}</button>
        </div>
        </>
    )
}