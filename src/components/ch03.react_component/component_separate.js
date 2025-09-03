function Top() {
  return (
    <header>
      <h1>인사말</h1>
      여러분..안녕하세요~~
    </header>
  );
}
function Content() {
  return (
    <nav>
      <ul>
        <li><a href="https://naver.com">네이버</a></li>
        <li><a href="https://google.com">구글</a></li>
        <li><a href="https://daum.net">다음</a></li>
      </ul>
    </nav>
  );
}
function Bottom() {
  return (
    <article>
      <h2>맺음말</h2>
      여러분 부자 되시고, 언제나 행복하세요.
    </article>
  );
}



function App() {
  console.log("컴포넌트별 분리하기");

  return (
    // 최상위 태그는 1개만 존재 가능.
    <div className="App">
      <Top />
      <Content />
      <Bottom />
    </div>
  );
}
export default App;
