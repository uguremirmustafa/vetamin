import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import { DataProvider } from '@context/GlobalState';
import Layout from '@components/layout/Layout';
import { initRouterListeners } from '@utils/scrollRestoration';
import 'swiper/swiper-bundle.min.css';
import { AnimatePresence } from 'framer-motion';
initRouterListeners();

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Provider session={pageProps.session}>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </Provider>
    </DataProvider>
  );
}

export default MyApp;
