export function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div className="relative overflow-hidden bg-gray-200 h-56">
            <img 
              src={product.thumbnail} 
              alt={product.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {product.category}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800 hover:text-blue-600 transition">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600">Rating: {product.rating || '4.5'}</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                <p className="text-xs text-gray-500">Free shipping</p>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition font-semibold shadow-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
