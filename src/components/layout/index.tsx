import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({ children, header, footer }: any ) => {
  return (
    <>
      <Header data={header}/>
      <main>
        {children}
      </main>
      <Footer data={footer}/>
    </>
  )
}
