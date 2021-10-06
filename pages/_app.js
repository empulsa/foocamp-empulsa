import '../styles/main.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <navegation />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
