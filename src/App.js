import { dataTranslate } from "./localization.ts"
import CurretnTab from "./CurentTab.tsx"
import { options } from "./mock.ts";
import style from "./styles.css"
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {

  const [state, setState] = useState({});
  const [stateCalcFirst, setStateCalcFirst] = useState({});
  const [stateCalcSecond, setStateCalcSecond] = useState({});
  const [curent, setCurrent] = useState('');
  const [curentSecond, setCurrentSecond] = useState('');

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
    console.log("Fruit Selected!!", e.target.value);
    setCurrentSecond(e.target.value);
  }

  const handleChangeFirst = (e) => {
    console.log("Fruit Selected!!", e.target.value);
    setStateCalcSecond({ stateCalcSecond: e.target.value });
  }

  const totalCurrentUAHonEUR = () => {
  //   const oneEURO = state?.rates.EUR
  // console.log("this is one EURO", state?.rates?.EUR)
  }
  totalCurrentUAHonEUR();

 


  return (
    <div className={style.headers}>
      <div className="currentCourse">{`UAH current course on one USD = ${state?.rates?.UAH}`}</div>
      <div className={style.table}>
        <h1>{dataTranslate.nameList}</h1>
        <select value={curent} onChange={(e) => setCurrent(e.target.value)}>
          {options.map(e => {
            return(
              <option value={e.value}>{e.label}</option>
            )
          })}
        </select>
        <div>
          {`you choice is ${curent}`}
      </div>

        <select value={curentSecond} onChange={(e) => setCurrentSecond(e.target.value)} >
          {options.map(e => {
            return(
              <option value={e.value}>{e.label}</option>
            )
          })}
        </select>
      </div>
      <div>
          {`you choice is ${curentSecond}`}
      </div>

      <CurretnTab className={style.table} />

    </div>
  );
}

export default App;
