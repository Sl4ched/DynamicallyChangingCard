import React, {useEffect, useState} from "react";
import App from "../App/App";


const CorrectScreen = () => {

    const [isGoBack, setIsGoBack] = useState(true)

    function goBack() {
        setIsGoBack(false)
    }

    return (

        <div className={"flexContainer4"}>

            {isGoBack ? <div className={"flexContainer5"}>
                <img className={"image"} src={require("./photos/icon-complete.png")} alt={"img"}/>
                <h1 className={"font"}>THANK YOU!</h1>
                <div className={"font"}>We've added your card details</div>
                <button onClick={goBack} className={"button2"}>Continue</button>
            </div> : document.location.reload()}

        </div>
    )

}

export default CorrectScreen