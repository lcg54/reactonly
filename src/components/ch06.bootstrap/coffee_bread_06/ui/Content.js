import { Dropdown, ListGroup, Table } from 'react-bootstrap';

function App({ products, categories, getIdByClick, onClickToContent, orderInfo, orderByClick }) {
  
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
          <tr onClick={handleOrderByClick}>
            <td width="1%" valign='middle'>{/* 왼쪽에 둘다 붙이려고 너비지정 (정석적인 방법은 아님) */}
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  정렬할 컬럼
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="price">가격</Dropdown.Item>
                  <Dropdown.Item id="name">이름</Dropdown.Item>
                  <Dropdown.Item id="category">카테고리</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td width="1%" valign='middle'>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  정렬 방식
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="asc">오름차순</Dropdown.Item>
                  <Dropdown.Item id="dsc">내림차순</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td valign='middle'>
              <ListGroup horizontal>
                <ListGroup.Item>정렬할 컬럼 : {orderInfo.column === "price" ? "가격" : orderInfo.column === "name" ? "이름" : "카테고리"}</ListGroup.Item>
                <ListGroup.Item>정렬 방식 : {orderInfo.direction === "asc" ? "오름차순" : "내림차순"}</ListGroup.Item>
              </ListGroup>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>이름</th><th>가격</th><th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => handleProductRowClick(product.id)}>
              <td>{product.name}</td>
              <td>{Number(product.price).toLocaleString()} 원</td>{/* 넘버로 바꾼 후 3자리마다 콤마 */}
              <td>{categories.find(category => category.engName === product.category)?.korName}</td>{/* 카테고리 영문명과 비교하여 같으면 한글명 반환 */}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
