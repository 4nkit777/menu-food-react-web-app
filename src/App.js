import React, { useState } from 'react';
import menu from './data';
import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';

const allCategories = ['all', ...new Set(menu.map((i) => i.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((t) => t.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className='container mt-5'>
      <section >
        <div className='title text-center d-flex flex-column align-items-center'>
          <h2>Our Menu</h2>
          <div className='bg-primary' style={{ width: '150px', height: '5px'}}></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
