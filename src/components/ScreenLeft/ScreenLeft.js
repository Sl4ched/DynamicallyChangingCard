import React from "react";

const ScreenLeft = (props) => {

    const backgroundOfLeft = {
        background: "no-repeat",
        backgroundImage: "url(" + require("./photos/bg-main-desktop.png") + ")",
        backgroundSize: "140%"
    }

    const backgroundFront = {
        background: "no-repeat",
        backgroundImage: "url(" + require("./photos/bg-card-front.png") + ")",
        backgroundSize: "100%"
    }

    const backgroundBack = {
        background: "no-repeat",
        backgroundImage: "url(" + require("./photos/bg-card-back.png") + ")",
        backgroundSize: "100%"
    }

    return(
        <div style={backgroundOfLeft} className={"screenLeft"}>
            <div style={backgroundFront} className={"frontSideOfCard"}>
                <img alt={"img"} src={require("../App/photos/card-logo.png")}/>
                <div className={"font textOrder"}>{props.cardNumber}</div>
                <div className={"flexContainer2"}>
                    <div className={"textOrder2 font"}>{props.name}</div>
                    <div className={"textOrder2 font"}>{props.month + "/" + props.year}</div>
                </div>
            </div>

            <div style={backgroundBack} className={"backSideOfCard"}>
                <div className={"textOrder3 font"}>{props.cvc}</div>
            </div>
        </div>
    )

}

export default ScreenLeft