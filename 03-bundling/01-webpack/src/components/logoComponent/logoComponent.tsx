import React from "react";
import classes from "./logoComponentStyles.scss";

export const LogoComponent = ({logoImg}) => {
    return (
        <div className={classes.logo}>
            <div className={classes.logoImg}>
                <img src={logoImg} alt="" />
            </div>
            <h1><span className={classes.eggPlant}>berenjena</span>code</h1>
        </div>
    )
}