import { useEffect, useState } from "react"
import GameContent from "./GameContent"
import TimeDetails from "./TimeDetails"

const GameArea = () => {
    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        } 
    }
    const [state,setState] = useState({
        randomNumbers: Array.from(range(0,99)),
        numberToFind: null,
        playedFirstTime: false,
        timer: '00:00:00',
        timeHistory: [],
    })
    
    const startTimer = () => {

    }

    const generateNumberToFind = (newState) => {
        return new Promise((resolve)=>{
            const numbers = [...newState.randomNumbers]
            
            const index = Math.floor(Math.random()*99)
            console.log('prepared index',index)
            var numberToFind = numbers[index]
            console.log('number to find',numberToFind)
            console.log(numbers,numbers.includes(numberToFind))
            const updatedState = {
                ...newState,
                numberToFind: numberToFind,
            }
            setState(updatedState,()=>{
                resolve()
            })
            console.log('number to find',numberToFind)
            // resolve()
        })
        
    }

    const generateNumbers = (n) => {
        return new Promise((resolve)=>{
            const numbers = Array.from({ length: n * n }, (_, index) => index + 1);
            for (let i = numbers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
            }
            const updatedState = { 
                ...state,
                randomNumbers: numbers, 
            }
            
            console.log('generated numbers',numbers)
            resolve(updatedState)
        }) 
        


        
    }

    const startGame = async() => {
        var numbersToGenerate = 15
        if(window.innerWidth<500){
            numbersToGenerate = 10
        }
        const newState = await generateNumbers(numbersToGenerate)
        await generateNumberToFind(newState)
        await startTimer()
    } 

    useEffect(()=>{
        startGame()
    },[window.innerWidth])

    return (
        <div className="game-area">
            <GameContent handler={{state,setState}} action_play={()=>startGame()}/>
            <TimeDetails state={state}/>
        </div> 
    )
}

export default GameArea