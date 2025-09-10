import Display from './Display';

// 모드에 따라서 화면을 분기해주는 스위치 앱
function App({ mode, product }) {
  
  switch (mode) {
    case 'detail': return <Display product={product} />;
    case 'insert': return null;
    case 'update': return null;
    case 'delete': return null;
    case 'read': return null;
    default: return null;
  }
}

export default App;
