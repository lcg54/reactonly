import { useEffect, useState } from "react";

function App() {
  const imgSize = 100;

  const [count, setCount] = useState(0);
  const [img, setImage] = useState('/images/americano03.png');

  // 타이머에 의해 랜덤하게 보여질 이미지 배열
  const imgArr = [
    '/images/americano03.png',
    '/images/vanilla_latte_01.png',
    '/images/ciabatta_01.png',
    '/images/french_baguette_01.png',
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imgArr.length);
      setImage(imgArr[randomIndex]); // 이미지 변경
      setCount(prev => prev + 1);    // 카운터 증가
    }, 1000); // 1000ms(1초)마다 실행

    // 컴포넌트 언마운트 시 타이머 제거
    return () => clearInterval(interval);
  }, []); // 의존성 배열 : 안에 있는 값이 바뀔 때마다 Effect 함수가 다시 실행. 빈 배열[]이면 처음 한 번만 실행되고 다시는 실행되지 않음

  // const someAction = () => {
  //   setCount(count => count + 1);

  //   const randomIdx = Math.floor(Math.random() * imgArr.length);
  //   const randomImg = imgArr[randomIdx];
  //   setImage(randomImg);
  // };

  // const timer = () => setTimeout(someAction, 1000);

  // useEffect(timer);

  return (
    <>
      <h2>카운터 : {count}</h2>
      <div>
        <img src={img} alt="" width={imgSize} height={imgSize} />  
      </div>
      
    </>
  );
}

export default App;
