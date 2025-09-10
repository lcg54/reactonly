import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function App() {
  const message = '카운터에서 주문해 주시고, 즐거운 시간 되시길 바랍니다.';

  const ClickMenu = () => {

  }

  return (
    <>
      <ButtonGroup>
        <Button variant="secondary" onClick={ClickMenu}>생성</Button>
        <Button variant="secondary" onClick={ClickMenu}>수정</Button>
        <Button variant="secondary" onClick={ClickMenu}>삭제</Button>
        <Button variant="secondary" onClick={ClickMenu}>카테고리 추가</Button>
      </ButtonGroup>
      <br />
      {message}
    </>
  );
}

export default App;
