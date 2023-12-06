import React, {useState} from "react";

const EightBall = ({ answers }) => {
    const [color, setColor] = useState("black")
    const css = {backgroundColor: `${color}`}
    const [msg, setMsg] = useState("Think of a question")
    const getResponse = () => {
        let answer = answers[Math.floor(Math.random() * answers.length)]
        setColor(answer.color)
        setMsg(answer.msg)
    }

    return (
        <>
        <div style={css} className="ball" onClick={getResponse}>
            <p className="msg">{msg}</p>
        </div>
        </>
    )
}



export default EightBall;