import React from "react";
import { getAvg } from "../../services/averageService";
import classes from "./averageComponentStyles.scss";

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return <span className={classes.resultBackground}>Students average: {average}</span>
};