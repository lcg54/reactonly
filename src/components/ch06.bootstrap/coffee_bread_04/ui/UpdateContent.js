import { Button, Form, InputGroup } from "react-bootstrap";

import { useState } from "react";

import "./../css/FormStyle.css";

function App({ product, onSubmitUpdate }) {
  
  const [formData, setFormData] = useState(product);
  
  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormData(product => ({ ...product, [name]: value }));
  }

  const SubmittedData = (e) => {
    e.preventDefault(); // 기본 동작 막기
    onSubmitUpdate(formData);
  };

  return (
    <>
      <hr />
      <h2>상품 수정</h2>
      <form action="#" onSubmit={SubmittedData}>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">상품번호</InputGroup.Text>
          <Form.Control
            type="text"
            name="name"
            onChange={InputChange}
            value={formData.id}
            disabled/*disabled된 값은 안넘어감*/
          ></Form.Control>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">이름</InputGroup.Text>
          <Form.Control
            type="text"
            name="name"
            onChange={InputChange}
            value={formData.name}
          ></Form.Control>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">가격</InputGroup.Text>
          <Form.Control
            type="text"
            name="price"
            onChange={InputChange}
            value={formData.price}
          ></Form.Control>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">카테고리</InputGroup.Text>
          <Form.Select
            name="category"
            onChange={InputChange}
          >{/*select에서는 value 대신 selected*/}
            <option value="-" disabled selected>--카테고리를 선택해 주세요--</option>
            <option value="bread" selected={formData.category==='bread'}>빵</option>
            <option value="beverage" selected={formData.category==='beverage'}>음료수</option>
          </Form.Select>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">재고</InputGroup.Text>
          <Form.Control
            type="text"
            name="stock"
            onChange={InputChange}
            value={formData.stock}
          ></Form.Control>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">이미지</InputGroup.Text>
          <Form.Control
            type="text"
            name="image"
            onChange={InputChange}
            value={formData.image}
          ></Form.Control>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">부가 설명</InputGroup.Text>
          <Form.Control
            as="textarea"
            name="description"
            onChange={InputChange}
            value={formData.description}
          ></Form.Control>
        </InputGroup>

        <div className="d-grid gap-2">
          <Button type="submit" variant="warning">수정</Button>
        </div>
      </form>
    </>
  );
}

export default App;
