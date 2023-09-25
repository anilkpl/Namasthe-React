import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    );
  }

  export default AppLayout;