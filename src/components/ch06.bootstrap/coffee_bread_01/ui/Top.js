function App() { // props로 넘겨받음
  const title = 'React 맛집';
  const comment = '어서오세요~~ 맛있는 빵과 음료수가 많이 있습니다.';

  return (
    <>
      <h2>{title}</h2>
      {comment}
    </>
  );
}

export default App;
