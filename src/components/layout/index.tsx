import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({ children, header, footer, learn }: any ) => {
  return (
    <>
      <Header data={header} learn={learn}/>
      <main>
        {children}
      </main>
      <Footer data={footer}/>
    </>
  )
}
