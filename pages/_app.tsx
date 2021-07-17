import { Layout } from "@components/common";
import "../styles/global.css";

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDuqSADr3ocins6IomAA78p_poWDq0Vzw",
  authDomain: "plastic-loop.firebaseapp.com",
  projectId: "plastic-loop",
  storageBucket: "plastic-loop.appspot.com",
  messagingSenderId: "98560979744",
  appId: "1:98560979744:web:097d8746ce663ff3ad9d45",

  //   databaseURL: "https://myapp-project-123.firebaseio.com",
  //   measurementId: "G-8GSGZQ44ST",
};

firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
