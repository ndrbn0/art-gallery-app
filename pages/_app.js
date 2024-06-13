import { ArtPiecesProvider } from "../contexts/ArtPiecesContext";
import Layout from "../components/Layout";
import "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <ArtPiecesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ArtPiecesProvider>
  );
}

export default MyApp;
