import Footer from "./components/footer/footer";
import Header from "@app/app/components/header/header";

// const Layout = ({ children }:any)=> {
//   return (
//     <>
//       <div className="bg-gray-100">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </div>

//     </>
//   );
// }

// export default Layout;

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const RootLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-full pb-16">
      <div className="flex-grow">
        <Header />
        <main className="my-0 py-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
