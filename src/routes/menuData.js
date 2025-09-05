// import 앱명 from '경로/파일명'
// . = 현재폴더, .. = 상위폴더
import AppLetConst from '../components/ch02.es6_syntax/let_const';
import AppTemplateString from '../components/ch02.es6_syntax/template_string';
import AppSubjectList from '../components/ch02.es6_syntax/make_subject_list';
import AppMakeFunction from '../components/ch02.es6_syntax/make_function';
import AppArrowFunction from '../components/ch02.es6_syntax/arrow_function';
import AppArrayMap from '../components/ch02.es6_syntax/array_map';
import AppSpreadOperator from '../components/ch02.es6_syntax/sperad_operator';

import AppComponent01 from '../components/ch03.react_component/component01';
import AppComponent02 from '../components/ch03.react_component/component02';
import AppComponentSeparate from '../components/ch03.react_component/component_separate';
import AppFileSeparator from '../components/ch03.react_component/file_separator';
import AppUseProps from '../components/ch03.react_component/use_props';
import AppArrayAndTable from '../components/ch03.react_component/array_and_table_01';
import AppArrayAndTable2 from '../components/ch03.react_component/array_and_table_02';

import AppClickEvent from '../components/ch04.event_handling/click_event';
import AppChangeEvent from '../components/ch04.event_handling/change_event';
import AppMouseEvent from '../components/ch04.event_handling/mouse_event';
import AppKeyboardEvent from '../components/ch04.event_handling/keyboard_event';
import AppComboChange from '../components/ch04.event_handling/combo_change';

// export 키워드는 외부에서 참조 가능하도록 길을 틔워줌
export const menuData = [
  {
    chapter: "ch02. ECMAScript",
    items: [
      { path: '/let_const', label: 'let & const 실습', element: <AppLetConst /> },
      { path: '/template_string', label: '탬플릿 문자열', element: <AppTemplateString /> },
      { path: '/make_subject_list', label: '과목 목록 표시', element: <AppSubjectList /> },
      { path: '/make_function', label: '함수 만들기', element: <AppMakeFunction /> },
      { path: '/arrow_function', label: '화살표 함수', element: <AppArrowFunction /> },
      { path: '/array_map', label: '배열 함수(map)', element: <AppArrayMap /> },
      { path: '/spread_operator', label: '전개 연산자', element: <AppSpreadOperator /> },
    ]
  },
  {
    chapter: "ch03. Component",
    items: [
      { path: '/component01', label: '클래스형 컴포넌트', element: <AppComponent01 /> },
      { path: '/component02', label: '함수형 컴포넌트', element: <AppComponent02 /> },
      { path: '/component_separate', label: '컴포넌트별 분리하기', element: <AppComponentSeparate /> },
      { path: '/file_separator', label: '파일 분리하기', element: <AppFileSeparator /> },
      { path: '/use_props', label: 'props 사용하기', element: <AppUseProps /> },
      { path: '/array_and_table_01', label: '테이블 만들기 01', element: <AppArrayAndTable /> },
      { path: '/array_and_table_02', label: '테이블 만들기 02', element: <AppArrayAndTable2 /> },
    ]
  },
  {
    chapter: "ch04. Event",
    items: [
      { path: '/click_event', label: '클릭 이벤트', element: <AppClickEvent /> },
      { path: '/change_event', label: '체인지 이벤트', element: <AppChangeEvent /> },
      { path: '/mouse_event', label: '마우스 이벤트', element: <AppMouseEvent /> },
      { path: '/keyboard_event', label: '키보드 이벤트', element: <AppKeyboardEvent /> },
      { path: '/combo_change', label: '콤보 체인지', element: <AppComboChange /> },
    ]
  },
];
