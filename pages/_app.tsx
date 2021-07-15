import { CustomStylingProvider } from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <CustomStylingProvider>
      <Component {...pageProps} />
    </CustomStylingProvider>
  );
}

export default MyApp;
