import '../style/App.css';
import Button from "./Button"

export default function App() {
  return (
    <main> 
      <div className='numbers'>
          <Button value={1} operator={false} />
          <Button value={2} operator={false} />
          <Button value={3} operator={false} />
          <Button value={4} operator={false} />
          <Button value={5} operator={false} />
          <Button value={6} operator={false} />
          <Button value={7} operator={false} />
          <Button value={8} operator={false} />
          <Button value={9} operator={false} />
          <Button value={0} operator={false} />

      </div>
      <div className='operators'>
        <Button value="/" operator={true} />
        <Button value="*" operator={true} />
        <Button value="-" operator={true} />
        <Button value="+" operator={true} />
        <Button value="=" operator={true} />
      </div>
    </main>
  );
}
