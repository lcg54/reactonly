import { Button, Form, InputGroup } from "react-bootstrap";

import { useState } from "react";

import "./../css/FormStyle.css";

function App({ onSubmitCategoryAdd }) {

  // update에서의 product와 마찬가지로 객체로 초기화
  const [formData, setFormData] = useState({ engName: '', korName: '' }); 
  
  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const SubmittedData = (e) => {
    e.preventDefault();
    onSubmitCategoryAdd(formData);
  };

  return (
    <>
      <hr />
      <h2>카테고리 추가</h2>
      <form action="#" onSubmit={SubmittedData}>
        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">영문 이름</InputGroup.Text>
          <Form.Control
            type="text"
            name="engName"
            onChange={InputChange}
            value={formData.engName}
          ></Form.Control>
        </InputGroup>

        <InputGroup className="InputGroup">
          <InputGroup.Text className="InputGroupText">한글 이름</InputGroup.Text>
          <Form.Control
            type="text"
            name="korName"
            onChange={InputChange}
            value={formData.korName}
          ></Form.Control>
        </InputGroup>
        
        <div className="d-grid gap-2">
          <Button type="submit" variant="info">추가</Button>
        </div>
      </form>
    </>
  );
}

export default App;
