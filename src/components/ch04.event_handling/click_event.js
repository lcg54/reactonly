function App() {
  const ClickEvent01 = () => {
    console.log('안녕하세요~');
  }

  const ClickEvent02 = (name) => {
    const res = `반갑습니다~${name}님.`
    console.log(res);
  }

  const ClickEvent03 = (su01, su02) => {
    const res = `${su01} + ${su02} = ${su01 + su02}`
    console.log(res);
  }

  const ClickEvent04 = (msg, event) => {
    const res = `파라미터 정보 : ${msg}`;
    console.log(res);

    const eventArr = [];
    for (const evt in event) {
      eventArr.push(evt);
    }

    console.log('해당 이벤트 객체가 보유한 속성 정보');
    console.log(eventArr);
    console.log(`이벤트 유형 : ${event.type}`);
    console.log(`이벤트 발생 요소 : ${event.target}`);
  }

  const ClickEvent05 = (event) => {
    console.log(`해당 요소의 id : ${event.target.id}`);

    if (event.target.id === 'register') {
      console.log(`등록하기`)
    } else if (event.target.id === 'cancel') {
      console.log(`취소하기`)
    } else {
      console.log(`기타 사항`)
    }
  }


  return (
    <div className="App">
      <h2>클릭 이벤트</h2>

      {/* 매개변수가 0개일 때는 함수의 이름만 명시 */}
      <button onClick={ClickEvent01}>매개변수 0개</button><br />
      
      {/* 매개변수가 존재할 때는 화살표 함수로 둘러싸야 함 */}
      <button onClick={() => ClickEvent02('김규식')}>매개변수 1개</button><br />
      <button onClick={() => ClickEvent03(3, 5)}>매개변수 2개</button><br />

      {/* 이벤트 객체를 사용하고자 하는 경우 */}
      <button onClick={(e) => ClickEvent04('hello',e)}>이벤트 객체 전송</button><br />

      {/* html 문서에서 요소를 구분하고자 할 떄 id라는 속성을 사용 */}
      <button id="register" onClick={(e) => ClickEvent05(e)}>등록</button><br />
      <button id="cancel" onClick={(e) => ClickEvent05(e)}>취소</button>
    </div>
  );
}

export default App;
