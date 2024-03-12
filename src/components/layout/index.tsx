import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Header } from "./header"
import { Footer } from "./footer"
import { LayoutStyle } from "./LayoutStyle"
 
const defaultVariants = {
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const onExitCompleteHandler = () => {
  window.scrollTo(0, 0)
}



export const Layout = ({ children, header, footer }: any) => {
  const { asPath, pathname } = useRouter()

  let className = '';
  const validRoutes = ['/evidencias', '/causas', '/efectos', '/soluciones'];

  if (validRoutes.includes(pathname)) {
    className = 'hide-layout'; 
  }

  return (
    <LayoutStyle className={className}>
      <Header data={header} />
      <GoogleAnalytics gaId="G-1E2N0PYHBL" />
      <section className="main-section">
        <AnimatePresence mode="wait" onExitComplete={onExitCompleteHandler}>
          <motion.div
            key={asPath}
            variants={defaultVariants}
            animate="in"
            initial="out"
            exit="out"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </section>
      <Footer data={footer} />
    </LayoutStyle>
  )
}
