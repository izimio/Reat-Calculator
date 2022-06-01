import '../style/App.css';
import Button from "./Button"
import Result from "./Result"
import React, { useState } from "react"

export default function App() {
  
  const [latest, setLatest] = useState(false);
  const [bg, setBg] = useState(() => getRandomColor());
  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState({
    num: [""],
    ope: [""]
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function create_expression() {

    let expression = "";
    calc.num.forEach((num, index) => {
      expression += num + calc.ope[index];
    });
    return expression.replace("undefined", "").replace("X", "*");
  }
  function add_ope(ope) {
    ope = ope.toString();
    setBg(getRandomColor());

    if (ope === "&")
      return
    if (ope === "AC") {
      setResult(0);
      setCalc({
        num: [""],
        ope: [""]
      });
      setLatest(false);
      return
    }
    if (ope === "=") {
      let res = eval(create_expression()).toString();
      res === undefined ? setResult("Error") : setResult(res);
      if (res === undefined)
        return
      setCalc({
        num: res === 0 ? [""] : [res.toString()],
        ope: [""]
      });
      setLatest(false);
      return
    }
    if (ope >= '0' && ope <= '9') {
      setLatest(true);
      if (latest) {
        setCalc(prev => {
          let obj = [...prev.num]
          obj[obj.length - 1] += ope
          return {
            num: obj,
            ope: [...prev.ope]
          }
        })
        return
      } else {
        setCalc(prev => {
          return {
            num: [...prev.num, ope],
            ope: [...prev.ope]
          }
        })
      }
    } else {
      setCalc(prev => {
        let obj = [...prev.ope]
        let len = obj.length
        obj[len - 1] = ope
        return {
          num: [...prev.num],
          ope: latest ? [...prev.ope, ope] : obj
        }
      })
      setLatest(false)
    }
  }
  return (
    <main style={
      {
        backgroundColor: bg,
      }
    }>
      <div className='Calculator'>
        <div className='Upper'>
          <Result eval={create_expression()} result={result} />
        </div>
        <div className='Lower'>
          <div className='Lower--numbers'>
            <Button handleClick={add_ope} value="AC" weird={true} />
            <Button handleClick={add_ope} value="&" weird={true} />
            <Button handleClick={add_ope} value="%" weird={true} />
            <Button handleClick={add_ope} value="/" operator={true} />
            <Button handleClick={add_ope} value={7} />
            <Button handleClick={add_ope} value={8} />
            <Button handleClick={add_ope} value={9} />
            <Button handleClick={add_ope} value="X" operator={true} />
            <Button handleClick={add_ope} value={4} />
            <Button handleClick={add_ope} value={5} />
            <Button handleClick={add_ope} value={6} />
            <Button handleClick={add_ope} value="-" operator={true} />
            <Button handleClick={add_ope} value={1} />
            <Button handleClick={add_ope} value={2} />
            <Button handleClick={add_ope} value={3} />
            <Button handleClick={add_ope} value="+" operator={true} />
          </div>
          <div className='Lower--tricks'>
            <Button handleClick={add_ope} value={0} extend={true} />
            <Button handleClick={add_ope} value="." />
            <Button handleClick={add_ope} value="=" operator={true} />
          </div>
        </div>
      </div>
    </main>
  );
}
