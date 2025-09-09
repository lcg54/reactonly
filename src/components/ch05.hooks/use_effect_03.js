import { useEffect, useState } from "react";

function App() {
  //해당 사이트에서 다운받은 정보를 저장할 배열
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json()) // json 형식으로 반환
      .then(data => setReceivedData(data)); // recievedData에 저장
  }, []);
  
  const DataList = () => {
    const sliceArr = receivedData.slice(0, 10); // 0 이상 10 미만 잘라오기(slice)
    return (
      <ol>
        {sliceArr.map(data => (
          <li key={data.id}>{data.title}<a href={data.url} target="_blank">({data.url})</a></li> 
        ))}
      </ol>
    ); // target="_blank" : 새 창에서 열기
  }

  return (
    <div className="App">
      <DataList />
    </div>    
  );
}

export default App;
