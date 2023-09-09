import React, {useState} from "react";
import "./style.css"
import CorrectScreen from "../CorrectScreen/CorrectScreen";
import ScreenLeft from "../ScreenLeft/ScreenLeft";

function App() {

    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
    const [name, setName] = useState("JANE APPLESEED")
    const [cvc, setCvc] = useState("000")
    const [month, setMonth] = useState("00")
    const [year, setYear] = useState("00")
    const [cardNumberWarning, setCardNumberWarning] = useState(false)
    const [isBlank1, setIsBlank1] = useState(true)
    const [isBlank2, setIsBlank2] = useState(true)
    const [isBlank3, setIsBlank3] = useState(true)
    const [lastControl, setLastControl] = useState(true)

    const isThereALetter = (val, len) => {

        const isNumber = (val) => {
            let isItANumber = false

            for (let i = 0; i < 10; i++) {
                if (val.toString() === i.toString() || val.toString() === " ") {
                    isItANumber = true
                    break
                }
            }

            return isItANumber

        }

        let correct = 0

        for (let i = 0; i < len; i++) {
            if (isNumber(val.charAt(i))) correct++

        }

        return !(correct === len)
    }

    function triggerButton() {
        setLastControl(!(name.length !== 0 && !cardNumberWarning && !isBlank1 && !isBlank2 && !isBlank3))
    }

    const changeListener1 = (e) => {
        setName(e.target.value)
    }
    const changeListener2 = (e) => {
        setCardNumber(e.target.value)
        setCardNumberWarning(isThereALetter(e.target.value, e.target.value.length))

    }
    const changeListener3 = (e) => {
        const val = e.target.value.toString()
        setMonth(val);
        if (val.length === 1) {
            setMonth(0 + val)
        }

        setIsBlank1(val.length === 0)

    }
    const changeListener4 = (e) => {
        const val = e.target.value.toString()
        setYear(val)
        if (val.length === 1) {
            setYear(0 + val)
        }

        setIsBlank2(val.length === 0)

    }
    const changeListener5 = (e) => {
        setCvc(e.target.value)
        setIsBlank3(e.target.value.length === 0)

    }


    return (<div>

        <div className={"flexContainerMain"}>

            <ScreenLeft cardNumber={cardNumber} cvc={cvc} month={month} year={year} name={name}/>

            {lastControl ? <div className={"screenRight"}>

                <div className={"font textAlignment"}>CARDHOLDER NAME</div>
                <div className={"flexContainer"}>
                    <input maxLength={35} onChange={changeListener1} placeholder={"e.g. Jane Appleseed"}
                           className={"styleOfInput one font"}
                           type={"text"}/>
                </div>

                <div className={"font textAlignment"}>CARD NUMBER</div>
                <div className={"flexContainer"}>
                    {cardNumberWarning ?
                        <input maxLength={16} onChange={changeListener2} placeholder={"e.g. 1234 5678 9123 0000"}
                               className={"styleOfInput oneV2 font"} type={"text"}/> :
                        <input maxLength={16} onChange={changeListener2} placeholder={"e.g. 1234 5678 9123 0000"}
                               className={"styleOfInput one font"} type={"text"}/>}
                </div>

                {cardNumberWarning && <div className={"textOrder6 font"}>Wrong format,numbers only</div>}

                <div className={"flexContainer"}>
                    <div className={"font slideRight"}>EXP. DATE (MM/YY)</div>
                    <div className={"font spaceBetween"}>CVC</div>
                </div>

                <div className={"flexContainer"}>
                    {isBlank1 ? <input maxLength={2} onChange={changeListener3} placeholder={"MM"}
                                       className={"styleOfInput twoV2 slideRight font"} type={"text"}/> :
                        <input maxLength={2} onChange={changeListener3} placeholder={"MM"}
                               className={"styleOfInput two slideRight font"} type={"text"}/>}

                    {isBlank2 ?
                        <input maxLength={2} onChange={changeListener4} placeholder={"YY"}
                               className={"styleOfInput twoV2 font"}
                               type={"text"}/> :
                        <input maxLength={2} onChange={changeListener4} placeholder={"YY"}
                               className={"styleOfInput two font"}
                               type={"text"}/>}
                    {isBlank3 ? <input maxLength={3} onChange={changeListener5} placeholder={"e.g. 123"}
                                       className={"styleOfInput threeV2 font"}
                                       type={"text"}/> :
                        <input maxLength={3} onChange={changeListener5} placeholder={"e.g. 123"}
                               className={"styleOfInput three font"}
                               type={"text"}/>}
                </div>

                <div className={"flexContainer3"}>
                    {(isBlank1 || isBlank2) ? <div className={"font textOrder4"}>Can't be blank</div> :
                        <div style={{color: "white"}} className={"font textOrder4"}>Can't be
                            blank</div>}
                    {isBlank3 ? <div className={"font textOrder5"}>Can't be blank</div> :
                        <div style={{color: "white"}} className={"font textOrder5"}>Can't be
                            blank</div>}
                </div>


                <div className={"flexContainer"}>
                    <button onClick={triggerButton} className={"button font"}>Confirm</button>
                </div>

            </div> : <CorrectScreen/>}

        </div>

    </div>)

}

export default App