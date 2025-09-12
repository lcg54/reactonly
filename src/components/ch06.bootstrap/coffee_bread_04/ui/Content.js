import { Table } from 'react-bootstrap';

function App({ products, categories, onClickToGetId, onClickToContent }) {
  
  const ProductList = () => {

    const handleClick = (id) => {
      onClickToGetId(id);
      onClickToContent('detail');
    }

    return (
      <>
        <thead><tr><th>이름</th><th>가격</th><th>카테고리</th></tr></thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => handleClick(product.id)}>
              <td>{product.name}</td>
              <td>{Number(product.price).toLocaleString()} 원</td>{/* 넘버로 바꾼 후 3자리마다 콤마 */}
              <td>{categories.find(category => category.engName === product.category)?.korName}</td>{/* 카테고리 영문명과 비교하여 같으면 한글명 반환 */}
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
