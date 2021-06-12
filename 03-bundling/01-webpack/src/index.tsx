import React from "react";
import ReactDOM from "react-dom";
import { AverageComponent } from "./components/averageComponent/averageComponent";
import { TotalScoreComponent } from './components/totalScoreComponent/totalScoreComponent';
import { LogoComponent } from './components/logoComponent/logoComponent'
import { HelloWorldComponent } from './components/helloWorldComponent/helloWorldComponent'
import { DotenvMessage } from './components/dotenvMessage/dotenvMessage'
import classes from './styles.scss';
import logoImg from './content/logo.svg';


ReactDOM.render(
    <div className={classes.app}>
        <LogoComponent logoImg={logoImg} />
        <HelloWorldComponent />
        <AverageComponent />
        <TotalScoreComponent />
        < DotenvMessage/>
    </div>,
    document.getElementById("root")
)