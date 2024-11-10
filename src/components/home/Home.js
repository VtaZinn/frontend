import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import { useState } from "react";

function Home() {
  const [result, setResult] = useState([]);

  return(
    <>
      <Header setResult={setResult}/>
      <Cards result={result}/>
      <Content/>
      <Footer/>
    </>
  );
}

export default Home;