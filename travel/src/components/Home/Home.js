import Header from "../Header/Header.js";
import Tours from "../Tours/Tours.js";
import Footer from "../Footer/Footer.js";
const data = require("../../data/db.json");

function Home() {
  return (
    <>
      <Header />
      <Tours arrayData={data} />
      <Footer />
    </>
  );
}

export default Home;
