import React from 'react';

const Menu = () => {

    const menuItems = [
        { name: 'Greek Salad', description: 'Cheese, fresh cucumbers, ripe tomatoes, red onions, Kalamata olives, green peppers, olive oil, and oregano.', price: '$10'},
        { name: 'Bruschetta', description: 'Crispy toasted bread topped with fresh tomatoes, garlic, basil, olive oil, and a drizzle of balsamic glaze.', price: '$12'},
        { name: 'Spaghetti Tomato', description: 'Classic spaghetti tossed in a rich tomato sauce with garlic, olive oil, fresh basil, and grated Parmesan.', price: '$15'},
        { name: 'Lemon Tart', description: 'Buttery tart crust filled with tangy lemon custard, topped with a dusting of powdered sugar and a slice of fresh lemon.', price: '$8'},
    ];

    return (
        <section id="menu" className='menu'>
            <h2>Menu</h2>
            <div className='menu-items'>
                {menuItems.map((item, index) => (
                    <div key={index} className='menu-items'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className='price'>{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;