import { useState } from "react";

import { Card } from "react-bootstrap";

import Top from "./ui/Top";
import Content from "./ui/Content";
import Bottom from "./ui/Bottom";

import Display from './ui/Display';
import CreateContent from './ui/CreateContent';
import UpdateContent from './ui/UpdateContent';
import DeleteContent from './ui/DeleteContent';
import CreateCategory from './ui/CreateCategory';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "프렌치 바게트", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
    { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_03.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
    { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 333, image: 'americano03.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
    { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino02.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
  ]);

  const [categories, setCategories] = useState([
    { engName: 'bread', korName: '빵' },
    { engName: 'beverage', korName: '음료수' },
  ]);

  const [mode, setMode] = useState('read');

  const [clickedProductId, setClickedProductId] = useState(1);

  // (find) id가 같은 객체를 반환
  const selectedProduct = products.find(product => product.id === clickedProductId);

  
  // 새 formData에 id가 없으므로 직접 추가
  const InsertData = (formData) => {
    setProducts([...products, {id: Math.max(...products.map(product => product.id)) + 1, ...formData}]);
    setMode('read');
    alert('상품 정보가 등록되었습니다.');
  }

  // (map) id가 같으면 formData를, 다르면 기존 객체의 배열을 반환. formData.id는 disabled이므로 clickedProductId 사용
  const UpdateData = (formData) => {
    setProducts(products.map(product => product.id === clickedProductId ? formData : product));
    setMode('detail');
    alert('상품 정보가 수정되었습니다.');
  }

  // (filter) id가 다른 객체의 배열을 반환
  const DeleteData = () => {
    setProducts(products.filter(product => product.id !== clickedProductId));
    setMode('read');
    alert('상품 정보가 삭제되었습니다.');
  }

  const InsertCategory = (formData) => {
    setCategories([...categories, formData]);
    setMode('read');
    alert('카테고리가 추가되었습니다.');
  }

  const Switcher = () => {
    switch (mode) {
      case 'read': return <div />;
      case 'detail': return <Display product={selectedProduct} categories={categories} />;
      case 'get_insert': return <CreateContent categories={categories} onSubmitInsert={InsertData} />;
      case 'get_update': return <UpdateContent product={selectedProduct} categories={categories} onSubmitUpdate={UpdateData} />;
      case 'get_delete': return <DeleteContent product={selectedProduct} categories={categories} onSubmitDelete={DeleteData} />;
      case 'get_category_add': return <CreateCategory onSubmitCategoryAdd={InsertCategory} />;
      default: return null;
    }
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
            categories={categories}
            onClickToGetId={id => setClickedProductId(id)}
            onClickToContent={mode => setMode(mode)}
          />
        </Card.Body>

        <Card.Body>
          <Switcher />
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
