//'react-router-dom'은 라우팅을 위한 설치 라이브러리입니다.
// 기본으로 설치가 안되어있으니, 차후 설치를 해주어야 합니다.
// npm install react-router-dom
import { Routes, Route } from "react-router-dom";

import { menuData } from "./menuData";

function AppRoutes() {
  return (
    <Routes>
      {menuData.map(ch =>
        ch.items.map(it => (
          <Route key={it.path} path={it.path} element={it.element} />
        ))
      )}
    </Routes>
  );
}

export default AppRoutes;
