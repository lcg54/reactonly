import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

// 모드에 따라서 화면을 분기해주는 스위치 앱
function App({ mode, product, onSubmitInsert, onSubmitUpdate }) {
  
  switch (mode) {
    case 'detail': return <Display product={product} />;
    case 'get_insert': return <CreateContent onSubmitInsert={formData => onSubmitInsert(formData)} />;
    case 'get_update': return <UpdateContent product={product} onSubmitUpdate={formData => onSubmitUpdate(formData)} />;
    case 'get_delete': return <div />;
    case 'get_category_add': return <div />;
    case 'read': return <div />;
    default: return null;
  }
}

export default App;
