import { Button, Form, InputGroup } from "react-bootstrap";

import "./../css/FormStyle.css";

function App({ onSubmitCategoryAdd }) {
  const SubmittedData = (e) => {
    e.preventDefault(); // 기본 동작 막기

    const formData = {
      engName: e.target.engName.value,
      korName: e.target.korName.value,
    };

    onSubmitCategoryAdd(formData);
  };

  return (
    <>
      <hr />
      <h2>카테고리 추가</h2>
      <form action="#" onSubmit={SubmittedData}>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">영문 이름</InputGroup.Text>
          <Form.Control type="text" name="engName" />
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">한글 이름</InputGroup.Text>
          <Form.Control type="text" name="korName" />
        </InputGroup>

        <div className="d-grid gap-2">
          <Button type="submit" variant="info">추가</Button>
        </div>
      </form>
    </>
  );
}

export default App;