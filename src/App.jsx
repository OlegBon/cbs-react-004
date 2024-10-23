import { useState } from "react";

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const [value, setValue] = useState(0);

  const [textColor, setTextColor] = useState();

  const pushRandomValue = () => {
    setArr([...arr, Math.floor(Math.random()*1001)]);
  }

  const showRandomValue = () => {
    setValue(Math.floor(Math.random()*101));
  }

  const changeTextColor = () => {
    setTextColor({color: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`});    
  }

  return (
    <div className="container">
      <button onClick={pushRandomValue}>Add random value (0 ... 1000) to array</button>
      <ul>
        {arr.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>

      <button className="top" onClick={showRandomValue}>Show random value (0 ... 100)</button>
      <h2>{value}</h2>

      <p className="top-paragraph" style={textColor}>Створити параграф тексту. В якості inline-стилю для цього параграфу застосувати стейт, який буде змінювати колір тексту при натисканні на кнопку. Порада: для створення випадкового кольору використовуйте rgb() з трьома значеннями від 0 до 255.</p>
      <button onClick={changeTextColor}>Change text color</button>      
    </div>
  )
}

export default App
