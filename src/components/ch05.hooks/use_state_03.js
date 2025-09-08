import { useState } from "react";

function App() {
  const imgSize = 120;

  // 관리해야 할 상태(state) 개수가 많으면 객체 형식으로 정의하는 것이 유리함.
  // 하나의 상태로 합쳤으므로, 업데이트할 경우 이전과 달리 전체 객체가 그 값 하나만 가진 상태로 덮어쓰기 되어버림. 
  // 따라서 전개 연산자(...)를 사용하여 기존 상태값을 받아옴. (아니면 모든 상태값을 매번 다 써야함)
  const [car, setCar] = useState({
    model:'avante',
    color:'yellow',
    year:'2024',
    image:'avante',
    comment:'나름 좋아요.'
  });

  const ChangeTest = (e) => {
    if (e.target.id === 'model') {
      setCar({...car, model: e.target.value, image: e.target.value});

    } else if (e.target.id === 'color') {
      setCar({...car, color: e.target.value});

    } else if (e.target.id === 'year') {

      if (e.target.value === '2025') {
        setCar({...car, year: e.target.value, comment: '신차입니다.'});

      } else if (e.target.value === '2024') {
        setCar({...car, year: e.target.value, comment: '나름 좋아요.'});
        
      } else if (e.target.value === '2023') {
        setCar({...car, year: e.target.value, comment: '구형차입니다.'});
      }
    }
  }

  // map으로 불필요한 반복문 처리
  const selectOptions = [
    {
      id: 'model',
      label: '차종 변경',
      options: [
        { value: 'avante', label: '아반떼' },
        { value: 'sonata', label: '소나타' },
        { value: 'grandeur', label: '그랜져' }
      ]
    },
    {
      id: 'color',
      label: '색상 변경',
      options: [
        { value: 'yellow', label: '노랑' },
        { value: 'blue', label: '파랑' },
        { value: 'red', label: '빨강' },
        { value: 'green', label: '녹색' }
      ]
    },
    {
      id: 'year',
      label: '생산 년도',
      options: [
        { value: '2023', label: '2023년' },
        { value: '2024', label: '2024년' },
        { value: '2025', label: '2025년' }
      ]
    }
  ];

  // 중첩배열 안써도 됨
  const carMap = {
    avante: '아반떼',
    sonata: '소나타',
    grandeur: '그랜져'
  };

  return (
    <div className="App">
      <h1>내 차 정보</h1>
      <p>자동차의 종류에 따라서 이미지 변경이 되고, 색상은 설명 문구의 색상으로 변경이 됩니다.</p>

      {selectOptions.map(select => (
        <div key={select.id}>
          {select.label} : &nbsp;
          <select id={select.id} onChange={ChangeTest}>
            {select.options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      <br /><br />

      <p>
        <span style={{ color: car.color, fontWeight: 'bold' }}>
          {car.color}
        </span> 색상의 {car.year}년산 {`${carMap[car.model]}(${car.model})`} 모델

        <br />{car.comment}
      </p>
      <br /><br />
      
      <img src={`/images/${car.image}.png`} alt={car.image} width={imgSize} height={imgSize} />
    </div>
  );
}

export default App;
