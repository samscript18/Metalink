import {
  Navbar,
  Header,
  Collections,
  Explore,
  Clients,
  QA,
  Contact,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className="bg-oxfordBlue2">
        <Navbar />
        <Header />
        <Collections />
        <Explore />
        <Clients />
        <QA />
        <Contact />
        <CTA />
        <div className="body-gradient fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[200px]"></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
