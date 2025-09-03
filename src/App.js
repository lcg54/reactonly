// 특정 페이지로 이동을 하기 위한 링크
import { Link } from "react-router-dom";

// 개발자가 작성한 외부 모듈의 일부를 임포트합니다.
import AppRoutes from "./routes/AppRoutes";
import { menuData } from "./routes/menuData";

// 이 문서의 스타일은 App.css가 담당합니다.
import "./style/App.css";

const menu = (
  // 스타일은 css에서 따로 설정하는게 일반적
  <table border="7" bgcolor="#c7fae9">
    <thead>
      <tr>
        {menuData.map((ch) => (
          <th key={ch.chapter} style={{ paddingRight: "15px" }}>
            <ul>
              <li>{ch.chapter}</li>
            </ul>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {menuData.map((ch) => (
          <td key={ch.chapter}>
            <ol>
              {ch.items.map((it) => (
                <li key={it.path}>
                  <Link to={it.path}>{it.label}</Link>
                </li>
              ))}
            </ol>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

function App() {
  return (
    <div className="App">
      <h1>React Example Navigation</h1>
      {menu}

      {/* 라우터 모음 */}
      <AppRoutes />
    </div>
  );
}

export default App;
