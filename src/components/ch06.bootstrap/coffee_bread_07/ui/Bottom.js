import { ButtonGroup, Button } from "react-bootstrap";

function App({ onClickToBottom }) {
  const message = '카운터에서 주문해 주세요. 즐거운 시간 되시길 바랍니다.';

  return (
    <>
      <ButtonGroup>
        <Button variant="outline-success" onClick={() => onClickToBottom('get_insert')}>등록</Button>
        <Button variant="outline-warning" onClick={() => onClickToBottom('get_update')}>수정</Button>
        <Button variant="outline-danger" onClick={() => onClickToBottom('get_delete')}>삭제</Button>
        <Button variant="outline-info" onClick={() => onClickToBottom('get_category_add')}>카테고리 추가</Button>
      </ButtonGroup>
      <br /><br />
      {message}
    </>
  );
}

export default App;
