import type { AppProps, AppContext, AppInitialProps } from 'next/app';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

import { layoutPageData } from '../services/layout';
import { Layout, Meta } from '@/components';
import { queryClient } from '@/utils';

import '@/styles/fonts/stylesheet.css';
import '@/styles/styles.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App({ Component, pageProps}: AppProps) {

  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Meta />
      <Hydrate state={pageProps.dehydratedState}>
        <Layout header={pageProps.header} footer={pageProps.footer}>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

App.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => {
  
  const footer = await layoutPageData('footer', 380);
  const header = await layoutPageData('header', 380);
  
  const pageProps = (await appContext.Component.getInitialProps?.(appContext.ctx));

  return { pageProps: { ...pageProps, footer, header } };
}

export default App;
