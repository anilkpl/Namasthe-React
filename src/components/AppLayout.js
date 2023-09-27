import Header from "./Header";
import { Outlet } from "react-router-dom";


function AppLayout() {
    return (
      <div className="scrollbar-hide">
        <Header />
        <Outlet />
      </div>
    );
  }

  export default AppLayout;