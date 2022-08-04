import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'theme-ui';
import { swiss } from '@theme-ui/presets';

import type { AppProps } from 'next/app';

function Application({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={swiss}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default Application;
