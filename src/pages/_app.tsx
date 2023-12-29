import Navbar from "@/components/Navbar";
import "../../styles/globals.css";
import { AnimatePresence, motion, Spring } from "framer-motion";
import type { AppProps } from "next/app";

{/* 
reference 
https://codesandbox.io/p/github/d-e-v-esh/page-transitions/main?file=%2Fsrc%2Fpages%2F_app.tsx
*/}

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
    const transitionSpringPhysics: Spring = {
        type: "spring",
        mass: 0.2,
        stiffness: 80,
        damping: 10,
    };

    return (
        <div>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div key={router.route}>
                    <motion.div
                        style={{
                            backgroundColor: '#3f4739',
                            position: "fixed",
                            height: "100vh",
                            zIndex: 1000,
                            bottom: 0,
                            right: 0
                        }}
                        transition={transitionSpringPhysics}
                        animate={{ width: "0vw" }}
                        exit={{ width: "100vw" }}
                    />
                    <motion.div
                        style={{
                            backgroundColor: '#3f4739',
                            position: "fixed",
                            height: "100vh",
                            zIndex: 1000,
                            top: 0,

                        }}
                        transition={transitionSpringPhysics}
                        initial={{ width: "100vw" }}
                        animate={{ width: "0vw", transition: { delay: 0.2, duration: 0.35 } }}
                    />
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default App;