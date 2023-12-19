import React, {useEffect, useState} from "react";

const ScreenLeft = (props) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [bg, setBg] = useState(`url('${require('./photos/bg-main-desktop.png')}')`)
    const [bgSize, setBgSize] = useState("160%")

    useEffect(() => {

        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
            if (window.innerWidth > 500 && bg !== `url('${require("./photos/bg-main-desktop.png")}')`) {
                setBg(`url('${require("./photos/bg-main-desktop.png")}')`)
                setBgSize("160%")
            } else if (window.innerWidth <= 500 && bg !== `url('${require("./photos/bg-main-mobile.png")}')`) {
                setBg(`url('${require("./photos/bg-main-mobile.png")}')`)
                setBgSize("100%")
            }

        })
    }, [windowSize, bg, props.cardNumber]);

    const backgroundOfLeft = {
        background: "no-repeat",
        backgroundImage: bg,
        backgroundSize: bgSize
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

    return (
        <div style={backgroundOfLeft} className={"screenLeft"}>
            <div style={backgroundFront} className={"frontSideOfCard"}>
                <img alt={"img"} src={require("../App/photos/card-logo.png")}/>

                {props.cardNumber.length !== 0 ?
                    <div style={{display: "flex"}}>
                        {props.cardNumber.split('').map((value, index) => {
                            if ((index + 1) % 4 === 0) return <div key={index}
                                                                   className={"font textOrder"}>{value}&nbsp;</div>
                            else return <div key={index} className={"font textOrder"}>{value}</div>
                        })}
                    </div>
                    : <div className={"font textOrder"}>0000 0000 0000 0000</div>}

                <div className={"flexContainer2"}>

                    {windowSize <= 400 ? props.name.length > 15 ?
                        <div className={"textOrder2 font"}>{props.name.substring(0, 15)}...</div> :
                        props.name.length === 0 ? <div className={"textOrder2 font"}>JANE APPLESEED</div> :
                            <div className={"textOrder2 font"}>{props.name}</div> : props.name.length > 30 ?
                        <div className={"textOrder2 font"}>{props.name.substring(0, 30)}...</div> :
                        props.name.length === 0 ? <div className={"textOrder2 font"}>JANE APPLESEED</div> :
                            <div className={"textOrder2 font"}>{props.name}</div>}


                    {props.month.length === 0 && props.year.length === 0
                        ? <div className={"textOrder2 font"}>{"00 / 00"}</div>
                        : props.year.length === 0 ? <div className={"textOrder2 font"}>{props.month + " / 00"}</div> :
                            props.month.length === 0
                                ? <div className={"textOrder2 font"}>{"00 / " + props.year}</div>
                                : <div className={"textOrder2 font"}>{props.month + " / " + props.year}</div>
                    }
                </div>
            </div>

            <div style={backgroundBack} className={"backSideOfCard"}>
                {props.cvc.length === 0 ? <div className={"textOrder3 font"}>000</div> :
                    <div className={"textOrder3 font"}>{props.cvc}</div>}
            </div>
        </div>
    )

}

export default ScreenLeft