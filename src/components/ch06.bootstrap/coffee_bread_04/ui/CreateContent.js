import { Button, Form, InputGroup } from "react-bootstrap";

import "./../css/FormStyle.css";

function App({ onSubmitInsert }) {
  const SubmittedData = (e) => {
    e.preventDefault(); // 기본 동작 막기
    const formData = e.target;
    onSubmitInsert(formData);
  };

  return (
    <>
      <hr />
      <h2>상품 등록</h2>
      <form action="#" onSubmit={SubmittedData}>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">이름</InputGroup.Text>
          <Form.Control type="text" name="name"></Form.Control>
        </InputGroup>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">가격</InputGroup.Text>
          <Form.Control type="text" name="price"></Form.Control>
        </InputGroup>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">카테고리</InputGroup.Text>
          <Form.Select name="category">
            <option value="-" disabled selected>--카테고리를 선택해 주세요--</option>
            <option value="bread">빵</option>
            <option value="beverage">음료수</option>
          </Form.Select>
        </InputGroup>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">재고</InputGroup.Text>
          <Form.Control type="text" name="stock"></Form.Control>
        </InputGroup>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">이미지</InputGroup.Text>
          <Form.Control type="text" name="image"></Form.Control>
        </InputGroup>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">부가 설명</InputGroup.Text>
          <Form.Control as="textarea" name="description"></Form.Control>
        </InputGroup>
        
        <div className="d-grid gap-2">
          <Button type="submit" variant="success">등록</Button>
        </div>
      </form>

      <div></div>
    </>
  );
}

export default App;
