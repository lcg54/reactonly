import { useEffect, useState } from "react";

function App() {
  const imgSize = 200;

  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);
  const [tripleCountPlusOne, setTripleCountPlusOne] = useState(0);
  const [img, setImage] = useState('/images/americano03.png');

  const imgArr = [
    '/images/americano03.png',
    '/images/vanilla_latte_01.png',
    '/images/ciabatta_01.png',
    '/images/french_baguette_01.png',
  ];
  
  // useEffect(함수,배열) : 최초 1회 rendering / count가 변경될 때마다 다시 rendering
  useEffect(() => {
    setDoubleCount(() => count * 2);
    setTripleCountPlusOne(() => count * 3 + 1);
    setImage(imgArr[count % imgArr.length]);
  }, [count]);


  return (
    <div className="App">
      <h3>버튼을 누를 때마다 카운트 +1, 그림도 순차적으로 출력</h3>
      <table border={1}>
        <tbody>
          <tr>
            <td>카운트</td>
            <td>{count}</td>
          </tr>
          <tr>
            <td>카운트 x2</td>
            <td>{doubleCount}</td>
          </tr>
          <tr>
            <td>카운트 x3+1</td>
            <td>{tripleCountPlusOne}</td>
          </tr>
        </tbody>
      </table>
      <br />
      {/* 화살표함수를 직접 속성창에 작성 */}
      <button onClick={() => setCount(cnt => cnt + 1)}>&nbsp;+1&nbsp;</button>
      <hr />
      <img src={img} alt="NoImage" width={imgSize} height={imgSize} />
    </div>    
  );
}

export default App;
