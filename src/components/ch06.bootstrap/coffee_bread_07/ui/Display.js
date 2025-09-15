import { Table, Image } from "react-bootstrap";
import './../css/Display.css';

function App({ product, categories }) {

  return (
    <>
      <Table bordered hover>
        <tbody>
          <tr>
            <td className="leftOfTable">
              <Table striped bordered hover>
                <tbody>
                  <tr><td className="leftOfTable">상품번호</td><td>{product.id}</td></tr>
                  <tr><td className="leftOfTable">상품명</td><td>{product.name}</td></tr>
                  <tr><td className="leftOfTable">단가</td><td>{Number(product.price).toLocaleString()} 원</td></tr>
                  <tr><td className="leftOfTable">카테고리</td><td>{categories.find(category => category.engName === product.category)?.korName}</td></tr>
                  <tr><td className="leftOfTable">재고</td><td>{product.stock}</td></tr>
                </tbody>
              </Table>
            </td>
            <td className="middleOfTable">
              <Image src={`/images/${product.image}`} alt={product.name} rounded />
            </td>
            <td className="rightOfTable">
              {product.description}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default App;
