import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import { DataProvider } from '@context/GlobalState';
import Layout from '@components/layout/Layout';
import { initRouterListeners } from '@utils/scrollRestoration';
import 'swiper/swiper-bundle.min.css';
import { AnimatePresence, motion } from 'framer-motion';

initRouterListeners();

const variants = {
  pageInitial: {
    // opacity: 0,
    y: -100,
  },
  pageAnimate: {
    // opacity: 1,
    y: 0,
  },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <DataProvider>
      <Provider session={pageProps.session}>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              variants={variants}
            >
              <Component {...pageProps} />
            </motion.div>
          </Layout>
        </AnimatePresence>
      </Provider>
    </DataProvider>
  );
}

export default MyApp;
