import Top from './ui/Top02';
import Content from './ui/Content02';
import Bottom from './ui/Bottom02';

function App() {
  console.log("props");
  const breadList = [
    { name: '소금빵', link: 1 },
    { name: '단팥빵', link: 2 },
    { name: '샌드위치', link: 3 },
    { name: '도넛', link: 4 },
    { name: '소보로빵', link: 5 },
  ];
  const coffeeList = [
    { name: '아메리카노', link: 1 },
    { name: '카페라떼', link: 2 },
    { name: '콜드브루', link: 3 },
    { name: '바닐라라떼', link: 4 },
  ];

  return (
    <div className="App">
      <Top greeting="포레스트 다방" welcome="어서오세요. 저희 매장에서 즐거운 시간 되시길 바랍니다." />
      <Content type="ul" items={breadList} />
      <hr color='lightgreen' />
      <Content type="ol" items={coffeeList} />
      <Bottom goodbye="안녕히 가세요." comment="다음에 또 봐요." />
    </div>
  );
}

export default App;