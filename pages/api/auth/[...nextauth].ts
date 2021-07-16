import NextAuth from "next-auth";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

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

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore();

const options = {
  providers: [
    Providers.Email({
      server:
        "smtp://apikey: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@smtp.sendgrid.net:587",
      from: "vaughn_dalde@icloud.com",
    }),
  ],
  adapter: FirebaseAdapter(firestore),

  debug: process.env.NODE_ENV === "development" ? true : false,
};

const authHandler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuth(req, res, options);

export default authHandler;
