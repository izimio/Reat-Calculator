import '../style/App.css';
import Button from "./Button"
import Result from "./Result"
import React, { useState } from "react"

export default function App() {
  const [result, setResult] = useState(0);
  const [calc, setCalc] = useState([]);

  return (
    <main>
      <div className='Upper'>
        <Result result={0} />
      </div>
      <div className='Lower'>
        <div className='Lower--numbers'>
          <Button value="AC" weird={true} />
          <Button value="&" weird={true} />
          <Button value="%" weird={true} />
          <Button value="/" operator={true}/>
          <Button value={7} />
          <Button value={8} />
          <Button value={9} />
          <Button value="X" operator={true}/>
          <Button value={4} />
          <Button value={5} />
          <Button value={6} />
          <Button value="-" operator={true}/>
          <Button value={1} />
          <Button value={2} />
          <Button value={3} />
          <Button value="+" operator={true}/>
        </div>
        <div className='Lower--tricks'>
          <Button value={0} extend={true} />
          <Button value="." />
          <Button value="=" operator={true} />
        </div>
      </div>
    </main>
  );
}
