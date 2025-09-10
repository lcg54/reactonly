import { Table, Image } from "react-bootstrap";
import './../css/Display.css';

// 모드에 따라서 화면을 분기해주는 스위치 앱
function App({ product }) {

  const DetailTable = () => {
    return (
      <Table striped bordered hover>
        <tbody>
          <tr><td className="detailLeft">상품번호</td><td>{product.id}</td></tr>
          <tr><td className="detailLeft">이름</td><td>{product.name}</td></tr>
          <tr><td className="detailLeft">단가</td><td>{Number(product.price).toLocaleString()} 원</td></tr>
          <tr><td className="detailLeft">카테고리</td><td>{product.category === 'bread' ? '빵' : '음료수'}</td></tr>
          <tr><td className="detailLeft">재고</td><td>{product.stock}</td></tr>
        </tbody>
      </Table>
    );
  }
  
  return (
    <>
      <Table bordered hover>
        <tbody>
          <tr>
            <td className="detailLeft"><DetailTable /></td>
            <td><Image src={`/images/${product.image}`} alt={product.name} rounded /></td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default App;
