function App() {
  const ChangeTest = (e) => {
    const where = e.target.value;
    if (where === '-') {
      alert(`이동할 페이지를 선택해 주세요.`)
    } else {
      document.getElementById("myform").action = where; // 이동할 페이지 정보 변경 (저장)
      document.getElementById("myform").submit(); // 해당 페이지로 양식을 제출
    }
  }
  const SubmitTest = (e) => {
    const isChecked = document.getElementById("go").checked;
    isChecked === true ? alert(`액션 페이지로 이동합니다.`) : alert(`체크 상태일 때만 이동합니다.`);
    isChecked === false && e.preventDefault();
  }

  return (
    <div className="App">
      <h2>Submit Test</h2>
      <form id="myform" onSubmit={SubmitTest} action={`https://www.naver.com`}>
        <select onChange={ChangeTest}>
          <option value="-">--이동할 곳을 선택해 주세요--</option>
          <option value="https://www.naver.com">네이버</option>
          <option value="https://www.daum.net">다음</option>
          <option value="https://www.google.com">구글</option>
        </select>
        <br /><br />

        <input type="checkbox" id="go"/>체크 상태일 때만 해당 페이지로 이동
        <br /><br />

        <input type="submit" value="전송" />
      </form>
    </div>
  );
}

export default App;
