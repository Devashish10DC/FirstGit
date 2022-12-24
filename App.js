import React, { Fragment, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler =()=>{
    setCartIsShown(true);
  };

  const hideCartHandler =()=>{
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
