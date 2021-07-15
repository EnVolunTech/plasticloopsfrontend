import { CustomStylingProvider } from "styles/theme";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <CustomStylingProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomStylingProvider>
  );
}

export default MyApp;
