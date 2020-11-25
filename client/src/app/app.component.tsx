import React from "react";

import Navbar from "../components/landing/navbar/navbar.component";
import Body from "../components/landing/body/body.component";
import Footer from "../components/landing/footer";

import useStore from "../hooks/use-store.hook";

function App() {
  const store = useStore();

  React.useEffect(() => {
    store.productStore.fetchProducts(false);
    store.categoryStore.fetchCategories();
  }, [store.productStore, store.categoryStore]);

  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Footer />
    </React.Fragment>
  );
}

export default App;
