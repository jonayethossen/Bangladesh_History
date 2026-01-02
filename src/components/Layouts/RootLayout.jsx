import { Outlet } from "react-router";
import FooterSection from "../Footer";
import Navbar from "../Navbar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <FooterSection />
    </div>
  );
}
