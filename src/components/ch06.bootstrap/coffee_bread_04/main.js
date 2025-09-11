import { useState } from "react";

import { Card } from "react-bootstrap";

import Top from "./ui/Top";
import Content from "./ui/Content";
import Bottom from "./ui/Bottom";
import Switcher from "./ui/Switcher";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "프렌치 바게트", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
    { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_03.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
    { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano03.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
    { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino02.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
  ]);

  const [mode, setMode] = useState('');
  
  const [clickedProductRowId, setClickedProductRowId] = useState(1);
  
  // products의 객체들과 비교하여 id가 같은 객체를 할당. map과 마찬가지로 배열로 반환되므로, [0]으로 첫번째 항목을 반환
  const selectedProduct = products.filter(product => product.id === clickedProductRowId)[0];

  const InsertData = (formData) => {
    setProducts([...products, {
      id: products.length + 1,
      name: formData.name.value,
      price: Number(formData.price.value),
      category: formData.category.value,
      stock: Number(formData.stock.value),
      image: formData.image.value,
      description: formData.description.value,
    }]);
  }

  // products의 객체들과 비교하여 id가 같으면 formData를, 다르면 기존 객체를 할당. formData의 id는 disabled이므로 selectedProduct를 사용
  const UpdateData = (formData) => {
    setProducts(products.map(product => product.id === selectedProduct.id ? formData : product));
  }

  return (
    <>
      <br />
      <Card>
        <Card.Header>
          <Top />
        </Card.Header>
        <Card.Body>
          <Content
            products={products}
            onClickToGetId={id => setClickedProductRowId(id)}
            onClickToContent={mode => setMode(mode)}
          />
        </Card.Body>
        <Card.Body>
          <Switcher
            mode={mode}
            product={selectedProduct}
            onSubmitInsert={InsertData}
            onSubmitUpdate={UpdateData}
          />
        </Card.Body>
        <Card.Footer>
          <Bottom
            onClickToBottom={mode => setMode(mode)}
          />
        </Card.Footer>
      </Card>
      <br /><br />
    </>
  );
}

export default App;
