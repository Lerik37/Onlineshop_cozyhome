import React, {useState} from "react";
import '../index.css';
import {FaShoppingCart} from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <b className='sum'>Сумма: {sum}</b>
    </div>)
}
const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Вы ничего не добавили в корзину</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div className='header-top'>
                <span className="logo">Cozy home</span>
                <div className='nav'>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                    className={`shop-cart-button ${cartOpen && 'active'}`}/>

                    {cartOpen && (
                        <div className='shop-cart'>
                            {props.orders.length > 0 ?
                                showOrders(props) : showNothing()
                            }
                        </div>
                    )}
                    <ul>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Каталог</li>
                        <li>Личный кабинет</li>
                    </ul>
                </div>
            </div>
            <div className="presentation">
            </div>
        </header>
    )
}