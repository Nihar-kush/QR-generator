import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Output from "./components/Output";

export default function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Header />
      <Main setLoading={setLoading} loading={loading} />
      <Footer />
    </div>
  );
}
