import { RecoilRoot } from 'recoil';
import '../styles/global.css';

import type { AppProps } from 'next/app';

function Application({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default Application;
