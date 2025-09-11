import { Table } from 'react-bootstrap';

function App({ products, onClickToContent }) {
  
  const ProductList = () => {
    return (
      <>
        <thead><tr><th>이름</th><th>가격</th><th>카테고리</th></tr></thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => onClickToContent(product.id)}>{/* props로 받아온 onClickToContent에 id를 넣어 리턴 */}
              <td>{product.name}</td>
              <td>{Number(product.price).toLocaleString()} 원</td>{/* 넘버로 바꾼 후 3자리마다 콤마 */}
              <td>{product.category === 'bread' ? '빵' : '음료수'}</td>
            </tr>
          ))}
        </tbody>
      </>  
    );
  }

  return (
    <>
      <Table striped bordered hover>
        <ProductList />
      </Table>
    </>
  );
}

export default App;
