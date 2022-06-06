import React from "react";
import Body from "./Layouts/body/Body";
import Footer from "./Layouts/footer/Footer";
import Header from "./Layouts/header/Header";
import ErrorBoundary from "./Components/ErrorBoundary";

const App = () => {
  return(
    <>
      <ErrorBoundary>
        <Header />
        <Body />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
