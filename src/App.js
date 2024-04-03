import Header from "./components/Header";
import PopularProducts from "./components/PopularProducts";

function App() {
  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <PopularProducts />
    </div>
  );
}

export default App;
