import { useEffect, useMemo, useState, useCallback } from 'react';
import { ProductList } from './components/ProductList';
import { Filters } from './components/Filters';
import { Cart } from './components/Cart';
import { filterProducts, getUniqueCategories } from './utils/productUtils';
import { loadCartFromStorage, saveCartToStorage } from './utils/cartUtils';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(loadCartFromStorage());

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('none');

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    saveCartToStorage(cart);
  }, [cart]);

  const categories = useMemo(
    () => getUniqueCategories(products),
    [products]
  );

  const filteredProducts = useMemo(
    () =>
      filterProducts(
        products,
        debouncedSearch,
        selectedCategory,
        sortOrder
      ),
    [products, debouncedSearch, selectedCategory, sortOrder]
  );

  const handleAddToCart = useCallback((product) => {
    setCart(prev => {
      const item = prev.find(p => p.product.id === product.id);
      if (item) {
        return prev.map(p =>
          p.product.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ShopHub</h1>
            <p className="text-gray-600 text-sm">Premium Online Shopping</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Items in Cart</p>
            <p className="text-2xl font-bold text-blue-600">{cart.length}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Filters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
              categories={categories}
              onClearFilters={() => {
                setSearchQuery('');
                setSelectedCategory('');
                setSortOrder('none');
              }}
            />
          </div>

          <div className="lg:col-span-2">
            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <Cart 
                items={cart}
                onRemoveItem={(productId) => {
                  setCart(prev => prev.filter(item => item.product.id !== productId));
                }}
                onUpdateQuantity={(productId, quantity) => {
                  if (quantity <= 0) {
                    setCart(prev => prev.filter(item => item.product.id !== productId));
                  } else {
                    setCart(prev => prev.map(item =>
                      item.product.id === productId
                        ? { ...item, quantity }
                        : item
                    ));
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
