import {useState} from "react";

export const InputWithToast = () => {
    const [messages, setMessages] = useState([])
    const [inputVal, setInputVal] = useState("");
    const addMessage = (e) => {
        e.preventDefault();
        const newVals = [...messages]
        newVals.push(inputVal)
        setMessages(newVals)
        setInputVal("");
    }
    const clearMessage = (i) => {
        const newVals = [...messages]
        newVals.splice(i, 1)
        setMessages(newVals)
    }

    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column', border: '1px solid red', height: '3000px'}}>
            <div>
                <form onSubmit={addMessage}>
                    <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} name={'toast'}/>
                    <button>Submit</button>
                </form>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                alignItems: 'center'
            }}>
                {messages.map((message, i) => {
                    return (<div key={i} style={{
                        border: '1px solid black',
                        width: '300px',
                        marginBottom: '20px',
                        animationName: 'fadeIn',
                        animationDuration: '3s'
                    }}>
                        <p>{message} <button onClick={() => clearMessage(i)}>X</button></p>
                    </div>)
                })}
            </div>
        </div>
    );
}
