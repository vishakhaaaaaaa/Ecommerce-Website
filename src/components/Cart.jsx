import { Trash2, ShoppingCart } from 'lucide-react';

export function Cart({ items, onRemoveItem, onUpdateQuantity }) {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-600 text-lg font-semibold">Your cart is empty</p>
        <p className="text-gray-500 text-sm mt-2">Add items to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingCart size={24} className="text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {items.map(item => (
          <div key={item.product.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 text-sm line-clamp-1">{item.product.title}</p>
              <p className="text-xs text-gray-600 mt-1">${item.product.price} each</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value))}
                className="w-12 px-2 py-1 border border-gray-300 rounded text-center font-semibold text-sm focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={() => onRemoveItem(item.product.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition"
                title="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-gray-200 pt-4 mt-4">
        <div className="flex justify-between mb-3">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold text-gray-800">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-semibold text-green-600">FREE</span>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Total:</span>
            <span className="text-3xl font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md">
          Checkout
        </button>
      </div>
    </div>
  );
}
