export function Filters({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-24">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Filters & Search</h2>
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">🔍 Search Products</label>
          <input
            type="text"
            placeholder="Find your item..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">📁 Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition bg-white"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">💰 Sort By Price</label>
          <select
            value={sortOrder}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition bg-white"
          >
            <option value="none">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
