import {useState} from "react"
import "./Magic8Ball.css"

const Magic8Ball = (props) => {
    const initialAnswer = "Think of a question"
    const initialBgColor = "black"
    const [answer, setAnswer] = useState(initialAnswer)
    const [bgColor, setBgColor] = useState(initialBgColor)

    const pickAnswer = () =>{
        if(bgColor == initialBgColor){
            const index =
                Math.floor( Math.random() * props.answers.length )
            setAnswer( props.answers[index].msg)
            setBgColor( props.answers[index].color)
        }
        else{
            setAnswer(initialAnswer)
            setBgColor(initialBgColor)
        }
    }

    return (
        <div
            className="magic-8-ball"
            style = {
                {backgroundColor:bgColor}
            }
            onClick={pickAnswer}
        >
            {answer}
        </div>
    )
}

export default Magic8Ball