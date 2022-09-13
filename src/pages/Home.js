import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
// import { DashboardNavbar } from "../components/DashboardNavbar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("customer");
  }, []);

  return (
    <>
      {/* <h1>Sidebar, Navbar</h1>
      <Outlet /> */}
      <Dashboard>
        <Outlet />
      </Dashboard>
      {/* <DashboardNavbar /> */}
    </>
  );
};

export default Home;
