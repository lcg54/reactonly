import { Button, Form, InputGroup } from "react-bootstrap";

import { useState } from "react";

import "./../css/FormStyle.css";

function App({ product, onSubmitUpdate, categories }) {
  
  const [formData, setFormData] = useState(product);
  
  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            type="number"
            name="id"
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
            value={formData.category}
          >
            <option value="-" disabled>--카테고리를 선택해 주세요--</option>
            {categories.map(category => (
              <option key={category.engName} value={category.engName}>
                {category.korName}
              </option>
            ))}
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
