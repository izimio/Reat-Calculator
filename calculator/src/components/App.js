import '../style/App.css';
import Button from "./Button"
import Result from "./Result"
import React, { useState, useEffect } from "react"

export default function App() {

  const [latest, setLatest] = useState(false);
  const [do_it, setDoit] = useState(false);
  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState({
    num: [""],
    ope: [""]
  });

  // useEffect(() => {
  //   if (do_it) {
  //     let res = eval(create_expression());
  //     console.log(res);
  //     res !== undefined ? setResult(res) : setResult("Error");
  //     setDoit(false);
  //   }
  // }, [do_it]);

  function HandleDoIt() {
    setDoit(prev => !prev);
  }

  function create_expression() {
  
    let expression = "";
    calc.num.map((num) => num.replace(/[^0]\d+/), '')
    calc.num.forEach((num, index) => {
      expression += num + calc.ope[index];
    });
    expression = expression.slice(0, -1);
    return expression.replace("undefine", "").replace("X", "*");
  }
  console.log(create_expression());
  function add_ope(ope) {
    ope = ope.toString();

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
      let res = eval(create_expression());
      !res ? setResult("Error") : setResult(res);
      if (res == undefined)
        return
      console.log(res);
      setCalc({
        num: [res.toString()],
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
    <main>
      <div className='Upper'>
        <Result eval={create_expression()} result={result} handleDoIt={HandleDoIt} />
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
    </main>
  );
}
