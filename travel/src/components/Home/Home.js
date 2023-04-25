import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";
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
