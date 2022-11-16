import { dataTranslate } from "./localization.ts"
import CurretnTab from "./CurentTab.tsx"
import { options, curentUAN } from "./mock.ts";
import style from "./styles.css"
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {

  const [state, setState] = useState({});
  const [curent, setCurrent] = useState('');
  const [curentSecond, setCurrentSecond] = useState('');
  const [currensy, setCurrensy] = useState("");

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };

  const UrlApi = "https://api.exchangerate.host/latest";

  useEffect(() => {
    axios.get(UrlApi, headers)
      .then(res => {
        console.log(res)
        setState(res.data)
      })
  }, [])

  if (!state) {
    return null;
  }

  const handleChangeSecond = (e) => {
    if (e?.target?.value === "UAN" ||
      e.target.value === "EUR" ||
      e.target.value === "USD") {
      e.target.disabled = true;
    }
    setCurrentSecond(e.target.value);
  }


  const changeInputvalue = (e) => {
    const currentValue = e.target.value;
    if (!currentValue) {
      return null;

    }
    setCurrensy(e.target.value);
  }

  const objFunctionCalc = {
    a: handleChangeSecond
  }

  function totalCurrent(e) {

    const curentEuroCourse = state?.rates?.EUR ? 37.5 : "";
    const curentUSDCourse = state?.rates?.USD ? 36.5 : "";
    const curentUAHCourse = state?.rates?.UAH ? 37.5 : "";

    const currentState = e?.target?.value;


    switch (currentState) {
      case "UAH":
        currensy = currensy * curentUAHCourse;
        break;
      case "EUR":
        currensy = currensy * curentEuroCourse;
        break;
      case "USD":
        currensy = currensy * curentUSDCourse
        break;

      default:
        return
    }
  }

  totalCurrent(objFunctionCalc.a);


  return (
    <div className={style.headers}>
      <div className="currentCourse">{`UAH current course on one USD = ${state?.rates?.UAH}`}</div>
      <div className={style.table}>
        <h1>{dataTranslate.nameList}</h1>
        <select value={curent} onChange={(e) => setCurrent(e.target.value)}>
          {curentUAN.map(e => {
            return (
              <option value={e.value}>{e.label}</option>
            )
          })}
        </select>
        <div>
          {`you choice is ${curent}`}
        </div>

        <select value={curentSecond} onChange={handleChangeSecond} >
          {options.map(e => {
            return (
              <option value={e.value}>{e.label}</option>
            )
          })}
        </select>
      </div>
      <div>
        {`you choice is ${curentSecond}`}
      </div>
      <input type="input" placeholder="choise your currency" value={currensy} onChange={changeInputvalue}></input>
      <CurretnTab className={style.table} amount={currensy} state={state} />

    </div>
  );
}

export default App;
