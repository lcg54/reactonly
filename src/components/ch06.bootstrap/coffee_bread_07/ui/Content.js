import { Dropdown, ListGroup, Table, Form } from 'react-bootstrap';

function App({ products, categories, getIdByClick, onClickToContent, orderInfo, orderByClick, selectCategoryByClick }) {
  
  const handleProductRowClick = (id) => {
    onClickToContent('detail');
    getIdByClick(id);
  }

  const handleOrderByClick = (e) => {
    e.preventDefault();

    let formData = { ...orderInfo };

    if (["price", "name", "category"].includes(e.target.id)) {
      formData.column = e.target.id;
    } else if (["asc", "dsc"].includes(e.target.id)) {
      formData.direction = e.target.id;
    }
    orderByClick(formData);
  }

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td width="1%" valign='middle'>{/* 왼쪽에 둘다 붙이려고 너비지정 (정석적인 방법은 아님) */}
              <Dropdown onClick={handleOrderByClick}>
                <Dropdown.Toggle variant="primary">
                  정렬 기준 : {orderInfo.column === "price" ? "가격" : orderInfo.column === "name" ? "이름" : "카테고리"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="price">가격</Dropdown.Item>
                  <Dropdown.Item id="name">상품명</Dropdown.Item>
                  <Dropdown.Item id="category">카테고리</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td width="1%" valign='middle'>
              <Dropdown onClick={handleOrderByClick}>
                <Dropdown.Toggle variant="primary">
                  순서 : {orderInfo.direction === "asc" ? "오름차순" : "내림차순"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="asc">오름차순</Dropdown.Item>
                  <Dropdown.Item id="dsc">내림차순</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            {/* <td valign='middle'>
              <ListGroup horizontal>
                <ListGroup.Item>정렬할 컬럼 : {orderInfo.column === "price" ? "가격" : orderInfo.column === "name" ? "이름" : "카테고리"}</ListGroup.Item>
                <ListGroup.Item>정렬 방식 : {orderInfo.direction === "asc" ? "오름차순" : "내림차순"}</ListGroup.Item>
              </ListGroup>
            </td> */}
            <td>
              <Form.Select onChange={(e) => selectCategoryByClick(e.target.value)}>
                <option value="all">전체 카테고리</option>
                  {categories.map(category =>
                    <option key={category.engName} value={category.engName}>{category.korName}</option>
                  )}
              </Form.Select>
            </td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>상품명</th><th>가격</th><th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => handleProductRowClick(product.id)}>
              <td>{product.name}</td>
              <td>{Number(product.price).toLocaleString()} 원</td>{/* 넘버로 바꾼 후 3자리마다 콤마 */}
              <td>{categories.find(category => category.engName === product.category)?.korName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
