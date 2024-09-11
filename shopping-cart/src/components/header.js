import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navigation = () => {
  const cartItems = useSelector(state => state.cart);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Shop</Link>
        <div className="flex items-center">
          <Link to="/products" className="mr-4 hover:text-blue-200">Products</Link>
          <Link to="/cart" className="flex items-center hover:text-blue-200">
            <ShoppingCart className="mr-1" />
            <span className="bg-white text-blue-600 rounded-full px-2 py-1 text-xs font-bold">
              {cartItemsCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;