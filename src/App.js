import React, { useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/cart-provider";

function App() {
    const [cartIdShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCarHandler = () => {
        setCartIsShown(false)
    }



    return (
        <CartProvider>
            {cartIdShown && <Cart onClose={hideCarHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
