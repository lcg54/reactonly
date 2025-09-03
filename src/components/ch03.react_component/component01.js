// react 라이브러리에서 
import { Component } from "react";

class App extends Component {
  // render : 클라이언트가 데이터를 입력받아서 화면에 그려주는 동작
  render() {
    console.log('클래스형 컴포넌트');
    return (
      // 속성(attribute) : 태그 안에 xxx="yyy"로 작성
      <div className="App">
        <img src="http://localhost:3000/americano01_bigsize.png" width="380" height="300" />
      </div>
    );  
  }
}

export default App;
