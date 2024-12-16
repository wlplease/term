import dynamic from "next/dynamic";
import Header from "../components/header";
import Footer from "../components/footer";

const EggGame = dynamic(() => import("../components/egggame"), { ssr: false });

const Egg: React.FC = () => {
  return (
    <>
      <Header />
      <EggGame />
      <Footer />
    </>
  );
};

export default Egg;
