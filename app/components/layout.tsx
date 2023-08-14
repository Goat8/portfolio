import Footer from "@app/app/components/header/header";
import Header from "@app/app/components/header/header";
import "../globals.css";
const Layout = ({ children }:  {
    children: React.ReactNode
  }) => {
  return (
    <div className="flex flex-col min-h-screen  w-full pb-16">
    <div className="flex-grow">
      <main className="my-0 py-16">{children}</main>
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default Layout;
