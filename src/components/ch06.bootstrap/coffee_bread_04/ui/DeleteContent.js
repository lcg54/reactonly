import { Button } from "react-bootstrap";

import Display from './Display'

import "./../css/FormStyle.css";

function App({ product, categories, onSubmitDelete }) {
  
  const handleDeleteClick = () => {
    if (window.confirm(`정말 '${product.name}'을(를) 삭제하시겠습니까?`)) {
      onSubmitDelete();
    }
  };

  return (
    <>
      <hr />
      <h2>상품 삭제</h2>
      <Display product={product} categories={categories} />
      <div className="d-grid gap-2">
        <Button onClick={handleDeleteClick} variant="danger">삭제</Button>
      </div>
    </>
  );
}

export default App;
