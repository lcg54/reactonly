function App() {
  const KeyboardEvent = (para, e) => {
    console.log(`파라미터 : ${para}`);
    console.log(`이벤트 타입 : ${e.type}`);
    console.log(`이벤트 타입 : ${e.target}`);
    console.log(`아스키 코드 : ${e.keyCode}`);
    console.log(`문자열 : ${e.key}`);
    console.log(`ctrl키 누름 여부 : ${e.ctrlKey}`);
    console.log(`alt키 누름 여부 : ${e.altKey}`);
    console.log(`shift키 누름 여부 : ${e.shiftKey}`);

    e.keyCode >= 48 && e.keyCode <= 57 ? console.log('숫자를 입력하셨습니다.') : console.log('숫자가 아닙니다.');
  }


  return (
    <div className="App">
      <h2>Key 이벤트</h2>
      Key Down : <input onKeyDown={(e) => KeyboardEvent('hello', e)} /><br />
    </div>
  );
}

export default App;
