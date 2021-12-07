import React, { useState, useEffect } from "react";

const Shop = () => {
    
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");
    const [cartTotal, setCartTotal] = useState(0);

    const items = [
        {
            id:1,
            name:"item1",
            price: 20
        },
        {
            id:2,
            name:"item2",
            price: 30
        },
        {
            id:3,
            name:"item3",
            price: 40
        }
    ];

    useEffect (() => {
        total();
    },[cart]);

    const total = () => {
        let totalVal = 0;
        for(let i = 0; i<cart.length; i++){
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const addToCart = (el) => {
        let added = true;
        for(let i =0; i<cart.length; i++){
            if(cart[i].add === el.id) added = false;
        }
        if(added){
            setCart([...cart, el]);
            setAlert("");
        }else setAlert(`${el.name} is already added`)
    }

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItems) => cartItems.id !== el.id);
        setCart(hardCopy);
        setAlert("");
    };


    const listItems = items.map((el) => (
        <div className="items" key = {el.id}>
            {`${el.name}: $${el.price}`}
            <input type="submit" value="+" onClick={() => addToCart(el)} />
        </div>
    ));

    const cartItems = cart.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input type="submit" value="-" onClick={() => removeFromCart(el)} />
        </div>
    ));

    return (
        <div>
            <div className="shop">
            store
            <div >{listItems}</div>
            </div>
            

            <div className="cart">
            <div>cart</div>
            <div>{cartItems}</div>
            <div>Total: ${cartTotal}</div>
            </div>
           
        </div>
    );
};

export default Shop;