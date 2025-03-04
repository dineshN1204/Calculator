import React, { useState } from 'react'

export default function Task4() {
    const [inp, setInp] = useState('')
    const popOutDigit = () => {
        if (inp.length > 0) {
            setInp(inp.slice(0, -1));
        }
        // setInp(inp.slice(0,inp.length-1))
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input type='text' value={inp}></input><br /><br />
            <button onClick={() => { setInp(inp + '1') }}>1</button>
            <button onClick={() => { setInp(inp + '2') }}>2</button>
            <button onClick={() => { setInp(inp + '3') }}>3</button><br />
            <button onClick={() => { setInp(inp + '4') }}>4</button>
            <button onClick={() => { setInp(inp + '5') }}>5</button>
            <button onClick={() => { setInp(inp + '6') }}>6</button><br />
            <button onClick={() => { setInp(inp + '7') }}>7</button>
            <button onClick={() => { setInp(inp + '8') }}>8</button>
            <button onClick={() => { setInp(inp + '9') }}>9</button><br />
            <button onClick={() => { setInp(inp + '0') }}>0</button><br /><br />
            <button onClick={() => { setInp(inp + '+') }}>+</button>
            <button onClick={() => { setInp(inp + '-') }}>-</button>
            <button onClick={() => { setInp(inp + '*') }}>*</button>
            <button onClick={() => { setInp(inp + '/') }}>/</button><br />
            <button onClick={() => { setInp(eval(inp)) }}>=</button><br />
            <button onClick={popOutDigit}>Clear</button>
        </div>
    )
}
