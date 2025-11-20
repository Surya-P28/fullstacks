import React, { useState } from 'react';

function RestaurantMenu() {
  const [order, setOrder] = useState([]);
  const menu = [
    { id: 1, name: 'Dum Biryani', price: 180 },
    { id: 2, name: 'Special Biryani', price: 200 },
    { id: 3, name: 'Hyderabadi Biryani', price: 260 }
  ];
  const total = order.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: '#000', color: 'white', padding: 40 }}>
      <h1>Biryani House</h1>
      {menu.map(item => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => setOrder([...order, item])}>+ Add</button>
        </div>
      ))}
      {order.length > 0 && (
        <div>
          <h2>Your Order</h2>
          {order.map((item, i) => <p key={i}>{item.name} - ₹{item.price}</p>)}
          <p><strong>Total: ₹{total}</strong></p>
        </div>
      )}
    </div>
  );
}

export default RestaurantMenu;
