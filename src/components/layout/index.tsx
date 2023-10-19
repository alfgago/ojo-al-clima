import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"

import { Header } from "./header"
import { Footer } from "./footer"

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
export const Layout = ({ children, header, footer, learn }: any) => {
  const { asPath } = useRouter()
  return (
    <main>
      <Header data={header} learn={learn} />
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
    </main>
  )
}
