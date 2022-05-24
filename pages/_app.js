
import React from "react";
import '../styles/globals.css';
import Home from ".";
import Login from "../components/Login";
import { SessionProvider } from "next-auth/react";


function App({ Component, pageProps }) {
    return(
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
}

export default App


