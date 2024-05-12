import {useState} from 'react'
import "./Calculator.css"

export default function Calculator (){

    const [input, setInput]= useState('');
    const [result,setResult] = useState('')

    const handleClick=(e)=>{
        setInput( prevInp=> prevInp+e);
    }
    const evaluateResult=()=>{
        if(input===''){
            setResult("Error")

        }
        else{
        try{
            const res=eval(input);
            setResult(res)
        }catch(e){
            setResult(e);
        }
    }
    }
    const clearInput=()=>{
        setInput('');
        setResult('')
    }

    return(
    <div className="calc">
        <h1>React Calculator</h1>
        <input type="text" value={input} disabled />
        <br />
        <div>
            {result}
        </div>
        <br />
        <div className='keys'>
            <button onClick={()=>handleClick('7')}>7</button>
            <button onClick={()=>handleClick('8')}>8</button>
            <button onClick={()=>handleClick('9')}>9</button>
            <button onClick={()=>handleClick('+')}>+</button>
            <br />
            <button onClick={()=>handleClick('4')}>4</button>
            <button onClick={()=>handleClick('5')}>5</button>
            <button onClick={()=>handleClick('6')}>6</button>
            <button onClick={()=>handleClick('-')}>-</button>
            <br />
            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <button onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('*')}>*</button>
            <br />
            <button onClick={clearInput}>C</button>
            <button onClick={()=>handleClick('0')}>0</button>
            <button onClick={evaluateResult}>=</button>
            <button onClick={()=>handleClick('/')}>/</button>
        </div>
    </div>
    );

}