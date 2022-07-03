import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.png"
import "./Soda"

function Soda(){
    return (
        <div>
            <img src={sodaImg} alt="coca cola can" />
            <Message>
                <h1>Omg gimme soda</h1>
                <h1> <Link to="/">go back</Link></h1>
            </Message>
            <img src={sodaImg} alt="coca cola can" />
        </div>
    )
}

export default Soda;