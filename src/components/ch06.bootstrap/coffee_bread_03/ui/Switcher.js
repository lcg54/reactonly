import Display from './Display';
import CreateContent from './CreateContent';

// 모드에 따라서 화면을 분기해주는 스위치 앱
function App({ mode, product, onSubmitInsert }) {
  
  switch (mode) {
    case 'detail': return <Display product={product} />;
    case 'get_insert': return <CreateContent onSubmitInsert={formData => onSubmitInsert(formData)} />;
    case 'get_update': return null;
    case 'get_delete': return null;
    case 'get_category_add': return null;
    case 'read': return <div />;
    default: return null;
  }
}

export default App;
