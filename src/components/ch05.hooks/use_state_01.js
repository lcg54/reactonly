import { useState } from "react";

function App() {
  const [color, setColor] = useState('red');
  const [name, setName] = useState('카푸치노');
  const [image, setImage] = useState('/images/cappuccino02.png');

  const ClickEvent = () => {
    if (color === 'red') {
      setColor('blue');
      setName('크로아상');
      setImage('/images/croissant_03.png');
    } else {
      setColor('red');
      setName('카푸치노');
      setImage('/images/cappuccino02.png');
    }
  };

  return (
    <div className="App">
      <h1>My favorite color is {color}!</h1>

      {/* 외부 중괄호는 JSX 표현식, 내부 중괄호는 자바스크립트 객체 표현식*/}
      <span style={{ color:color, fontWeight:'bold' }}>글자 색상</span>
      <br /><br />

      <button type="button" onClick={ClickEvent}>
        클릭 시 이미지 변경 및 {color} 색상으로 변경
      </button>
      <br /><br />

      <h3>{name}</h3>
      <img src={image} alt={name} width='210' height='210' />
    </div>
  );
}

export default App;
