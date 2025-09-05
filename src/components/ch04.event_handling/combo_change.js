import React, { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const breadList = [
    { name: "프렌치 바게트", image: "/images/french_baguette_01.png" },
    { name: "크로와상", image: "/images/croissant_03.png" },
    { name: "브리오슈", image: "/images/brioche_04.png" },
    { name: "치아바타", image: "/images/ciabatta_01.png" },
  ];

  const coffeeList = [
    { name: "아메리카노", image: "/images/americano03.png" },
    { name: "카푸치노", image: "/images/cappuccino02.png" },
    { name: "바닐라 라떼", image: "/images/vanilla_latte_01.png" },
  ];

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedItem(null); // 항목 초기화
  };

  const handleItemClick = (item) => {
    alert(item.name);
    setSelectedItem(item); // 이미지 표시
  };

  const renderList = () => {
    const list = selectedCategory === '빵' ? breadList : coffeeList;
    const ListTag = selectedCategory === '빵' ? 'ul' : 'ol';

    return (
      <ListTag style={{ cursor: 'pointer', backgroundColor: '#f0f0f0' }}>
        {list.map((item) => (
          <li key={item.name} onClick={() => handleItemClick(item)}>
            {item.name}
          </li>
        ))}
      </ListTag>
    );
  };

  return (
    <div>
      <h2>메뉴를 선택해주세요.</h2>

      <select onChange={handleSelectChange} defaultValue="">
        <option value="" disabled>선택</option>
        <option value="빵">빵</option>
        <option value="음료수">음료수</option>
      </select>
      <br />
      <div id="selectCategory">
        {selectedCategory && renderList()}
      </div>
      <br />
      {selectedItem && (
        <div id="selectItem">
          <h3>선택된 항목: {selectedItem.name}</h3>
          <img src={selectedItem.image} alt={selectedItem.name} style={{ width: "150px", height: "150px"}} />
        </div>
      )}
    </div>
  );
}

export default App;
