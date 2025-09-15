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
    { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino02.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." },
    { id: 5, name: "스폰지 케이크", price: 5000, category: 'cake', stock: 555, image: 'sponge_cake_01.png', description: "가장 일반적인 케이크로, 부드럽고 공기가 많은 스폰지 텍스처를 가지고 있습니다. 일반적으로 크림, 과일, 초콜릿 등 다양한 토핑과 함께 제공됩니다." },
    { id: 6, name: "초콜릿 케이크", price: 6000, category: 'cake', stock: 666, image: 'chocolate_cake_01.png', description: "초콜릿으로 만든 케이크로, 풍부하고 진한 초콜릿 맛을 가지고 있습니다. 초콜릿으로 만든 케이크 스폰지와 초콜릿으로 만든 크림 또는 가나슈를 사용하여 제작됩니다." },
    { id: 7, name: "바닐라 마카롱", price: 2500, category: 'macaron', stock: 120, image: 'vanilla_macaron.png', description: "부드럽고 달콤한 바닐라 크림이 들어 있는 프랑스식 디저트입니다. 겉은 바삭하고 속은 촉촉한 식감이 특징입니다." },
    { id: 8, name: "딸기 마카롱", price: 2800, category: 'macaron', stock: 90, image: 'strawberry_macaron.png', description: "상큼한 딸기 크림이 가득 들어 있는 마카롱으로, 달콤하면서도 상큼한 맛을 즐길 수 있습니다." }
  ]);

  const [categories, setCategories] = useState([
    { engName: 'bread', korName: '빵' },
    { engName: 'beverage', korName: '음료수' },
    { engName: 'cake', korName: '케이크' },
    { engName: 'macaron', korName: '마카롱' },
  ]);

  const [orderInfo, setOrderinfo] = useState({ column: 'price', direction: 'asc' });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [mode, setMode] = useState('read');

  const [clickedProductId, setClickedProductId] = useState(1);

  // (.find) id가 같은 '객체'를 반환
  const selectedProduct = products.find(product => product.id === clickedProductId);
  

  // 새 formData에 id가 없으므로 직접 추가
  const InsertData = (formData) => {
    setProducts([...products, {id: Math.max(...products.map(product => product.id)) + 1, ...formData}]);
    setMode('read');
    alert('상품 정보가 등록되었습니다.');
  }

  // (.map) id가 같으면 formData를, 다르면 기존 객체를 '배열'로 반환
  const UpdateData = (formData) => {
    setProducts(products.map(product => product.id === clickedProductId ? formData : product));
    setMode('detail');
    alert('상품 정보가 수정되었습니다.');
  }

  // (.filter) id가 다른 객체를 '배열'로 반환
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

  // (.sort(a,b)) 배열을 오름차순/내림차순으로 정렬하여 반환 
  const SortProducts = (formData) => {
    setOrderinfo(formData);
    setProducts([...products].sort((a, b) => {
      if (typeof a[formData.column] === 'number') { // 컬럼에 해당하는 값이 숫자 타입인 경우
        return formData.direction === 'asc' // asc와 같은가? (삼항연산자)
          ? a[formData.column] - b[formData.column] // 같음 => a - b 시행 => 결과값 < 0 => 오름차순
          : b[formData.column] - a[formData.column]; // 다름 => b - a 시행 => 결과값 > 0 => 내림차순
      }
      if (typeof a[formData.column] === 'string') { // 컬럼에 해당하는 값이 문자 타입인 경우
        return formData.direction === 'asc'
          ? a[formData.column].localeCompare(b[formData.column])
          : b[formData.column].localeCompare(a[formData.column]);
      }
      return 0; // 순서 유지
    }));
  }
  
  // 카테고리 선택에 따라, filteredProducts에 원본 products 또는 해당 카테고리의 products를 대입
  const filteredProducts = selectedCategory === "all"
  ? products
  : products.filter(product => product.category === selectedCategory);
  

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
            products={filteredProducts}
            categories={categories}
            onClickToContent={mode => setMode(mode)}
            getIdByClick={id => setClickedProductId(id)}
            orderInfo={orderInfo}
            orderByClick={SortProducts}
            selectCategoryByClick={cate => setSelectedCategory(cate)}
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
