import React from 'react';
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import spaghettiTomato from '../assets/spaghetti-tomato.jpg';
import lemonTart from '../assets/lemon-tart.jpg';
import './Menu.css';

const Menu = () => {

    const menuItems = [
        { name: 'Greek Salad', description: 'Cheese, fresh cucumbers, ripe tomatoes, red onions, Kalamata olives, green peppers, olive oil, and oregano.', price: '$10', image: greekSalad },
        { name: 'Bruschetta', description: 'Crispy toasted bread topped with fresh tomatoes, garlic, basil, olive oil, and a drizzle of balsamic glaze.', price: '$12', image: bruschetta},
        { name: 'Spaghetti Tomato', description: 'Classic spaghetti tossed in a rich tomato sauce with garlic, olive oil, fresh basil, and grated Parmesan.', price: '$15', image: spaghettiTomato},
        { name: 'Lemon Tart', description: 'Buttery tart crust filled with tangy lemon custard, topped with a dusting of powdered sugar and a slice of fresh lemon.', price: '$8', image: lemonTart},
    ];


    return (
        <section id="menu" className='menu'>
            <h2>Menu</h2>
            <div className='menu-items'>
                {menuItems.map((item, index) => (
                    <div key={index} className='menu-item'>
                         <img src={item.image} alt={item.name} className="menu-image"/> 
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className='price'>{item.price}</p>
                    </div>
                ))}
            </div>
            <div className="menu-footer">
                <button className="online-menu-button">Online Menu</button>
            </div>
        </section>
    );
};

export default Menu;