import './_app.css';
import { ContextProvider } from '../context';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
