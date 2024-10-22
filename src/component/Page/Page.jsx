import MoviList from "../cine/MoviList/MoviList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
