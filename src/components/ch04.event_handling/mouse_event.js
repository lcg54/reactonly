function App() {
  const img_small = 90;
  const img_large = 400;

  const MouseMoveEvent = (e) => {
    const imgSrc = e.target.src;
    console.log(`현재 이미지 : ${imgSrc}`);

    document.getElementById("large_image").src = imgSrc; // large_image 라는 id를 가진 Fragment의 src를 지정
  }

  const MouseLeaveEvent = () => {
    document.getElementById("large_image").src = "";
  }

  const breadList = [
    {name: "프렌치 바게트", image:"/images/french_baguette_01.png"},
    {name: "크로와상", image:"/images/croissant_03.png"},
    {name: "브리오슈", image:"/images/brioche_04.png"},
    {name: "치아바타", image:"/images/ciabatta_01.png"},
  ];
  
  const tbList = breadList.map((bread, index) => (
    <tr key={bread.name}>
      <td>
        <img src={bread.image} alt={bread.name} width={img_small} height={img_small}
        onMouseMove={MouseMoveEvent} onMouseLeave={MouseLeaveEvent} />
      </td>
      {index === 0 && ( // index가 0일 때만 실행
        <td rowSpan="4" width={img_large} >
          <img id="large_image" alt="noimage" width={img_large} height={img_large} />
        </td>
      )}
    </tr>
  ));
  
  return (
    <div className="App">
      <h2>마우스 이벤트</h2>
      <p>마우스를 이미지에 올리면 오른쪽에 큰 이미지가 나타납니다.</p>
      <table>
        <tbody>
          {tbList}
        </tbody>
      </table>
    </div>
  );
}

export default App;
