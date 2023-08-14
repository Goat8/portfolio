import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Layout from "./components/layout";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>  
      {children}
      </body>
      {/* <Footer/> */}
    </html>
  )
}
