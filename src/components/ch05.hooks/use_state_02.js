import { useState } from "react";

function App() {
  const imgSize = 120;

  const [model, setModel] = useState('avante');
  const [color, setColor] = useState('yellow');
  const [year, setYear] = useState('2024');
  const [image, setImage] = useState('avante');
  const [comment, setComment] = useState('나름 좋아요.');

    // 중첩 배열을 사용한 Map 객체 정의
  const carMap = new Map([
    ['avante','아반떼'],
    ['sonata','소나타'],
    ['grandeur','그랜져'],
  ]);

  const ChangeTest = (e) => {
    if (e.target.id === 'model') {
      setModel(e.target.value);
      setImage(e.target.value);

    } else if (e.target.id === 'color') {
      setColor(e.target.value);

    } else if (e.target.id === 'year') {
      setYear(e.target.value); 

      if (e.target.value === '2025') {
        setComment('신차입니다.')

      } else if (e.target.value === '2024') {
        setComment('나름 좋아요.')
        
      } else if (e.target.value === '2023') {
        setComment('구형차입니다.')
      }
    }
  }

  return (
    <div className="App">
      <h1>내 차 정보</h1>
      <p>자동차의 종류에 따라서 이미지 변경이 되고, 색상은 설명 문구의 색상으로 변경이 됩니다.</p>

      {/* entity : html에서 특수 문자를 표현하는 문자열 */}
      차종 변경 : &nbsp; {/* 띄어쓰기 */}
      <select id='model' onChange={ChangeTest}>
        <option value="avante">아반떼</option>
        <option value="sonata">소나타</option>
        <option value="grandeur">그랜져</option>
      </select>
      <br /><br />

      색상 변경 : &nbsp;
      <select id='color' onChange={ChangeTest}>
        <option value="yellow">노랑</option>
        <option value="blue">파랑</option>
        <option value="red">빨강</option>
        <option value="green">녹색</option>
      </select>
      <br /><br />

      생산 년도 : &nbsp;
      <select id='year' onChange={ChangeTest}>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <br /><br />

      <p>
        <span style={{ color: color, fontWeight: 'bold' }}>{color}</span> 색상의 {year} 년산 {`${carMap.get(model)}(${model})`} 모델
        <br />{comment}
      </p>
      <br /><br />
      
      <img src={`/images/${image}.png`} alt={image} width={imgSize} height={imgSize} />
    </div>
  );
}

export default App;
