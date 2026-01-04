# E-Commerce Store (React + Tailwind CSS)

A responsive **React + Tailwind CSS** e-commerce web application featuring product listing, filtering, sorting, and a shopping cart with `localStorage` persistence. This project demonstrates modern frontend development with React hooks, Tailwind CSS, and clean, reusable component architecture.

---

## Screenshots

### Homepage - Header & Filters
<img width="1919" height="953" alt="Homepage view showing the sticky header with logo and filters including search, category dropdown, and sort options" src="https://github.com/user-attachments/assets/44f098f1-c6fa-4089-a7d0-a86cc121b677" />

### Product Grid View 1
<img width="1892" height="878" alt="Grid view of products showing product cards with image, title, price, stock status, and Add to Cart button" src="https://github.com/user-attachments/assets/4e667831-7767-4db3-804b-a7e0948d4a45" />

### Product Grid View 2
<img width="1919" height="869" alt="Filters section showing All Categories selected in the dropdown with all products displayed" src="https://github.com/user-attachments/assets/e0257293-4093-4b26-b697-e8679608e696" />

### Product Grid View 3
<img width="1911" height="877" alt="Product card detail example showing Eyeshadow Palette with thumbnail, price, and Add to Cart button" src="https://github.com/user-attachments/assets/9ad37592-c57e-4a12-887e-03219fcf9051" />

### Product Grid View 4
<img width="1913" height="882" alt="Product card detail example showing Mascara product with thumbnail, price, and stock status" src="https://github.com/user-attachments/assets/f26d15f7-22c6-477c-955d-b1f4d3a34c9c" />

### Cart Sidebar Open
<img width="1916" height="884" alt="Shopping cart sidebar showing added products, quantity controls, remove buttons, total items, and total price" src="https://github.com/user-attachments/assets/89fdfb0f-cd6f-48f9-aed4-4793e8aa34f5" />

### Cart - Empty State
<img width="1918" height="883" alt="Shopping cart empty state showing empty cart icon and message 'Your cart is empty'" src="https://github.com/user-attachments/assets/a803a5c4-a76c-4120-87d7-dafcf151518e" />

### Cart with Multiple Different Products Added
<img width="1911" height="883" alt="Cart displaying multiple different products (3 Chicken, 1 Cooking Oil) with total quantity and total price calculated" src="https://github.com/user-attachments/assets/52c144f8-9759-4169-9963-1a8cb80cdd6e" />

**Figure:** Cart displays multiple different products with total quantity and total price calculated.

### Filtered Products & Cart with Multiple Quantities
<img width="1914" height="880" alt="Products filtered by category 'Beauty' and sorted by price high to low. The shopping cart shows 10 units of the same product added, with updated total items and total price." src="https://github.com/user-attachments/assets/e7d7505e-5dd4-4fda-b96b-20039839ded9" />

**Figure:** Filter applied for Beauty products sorted High to Low. Cart displays 10 units of the same product with updated totals.

---

## Features

- **Product Listing**  
  - Displays products fetched from [dummyjson.com](https://dummyjson.com/) API.  
  - Shows product image, title, price, stock, and Add to Cart button.

- **Search & Filters**  
  - Search products by title.  
  - Filter products by category.  
  - Sort products by price (ascending/descending).  
  - Clear filters functionality to reset view.

- **Shopping Cart**  
  - Add products to cart.  
  - Increase/decrease quantity of products.  
  - Remove products from cart.  
  - Cart state persists in `localStorage`.

- **Responsive Design**  
  - Fully responsive for mobile, tablet, and desktop devices.  
  - Sticky header and grid layout adapts to screen size.

- **UI/UX**  
  - Clean, modern layout using Tailwind CSS.  
  - Hover effects, buttons, and smooth transitions.

---

## Tech Stack

- **Frontend**: React + JavaScript  
- **Styling**: Tailwind CSS  
- **Icons**: [Lucide React](https://lucide.dev/)  
- **State Management**: React `useState` and `useEffect` hooks  
- **Utilities**: Custom hooks and helper functions for debounce, filtering, and cart management  

---

## Folder Structure

<img width="1218" height="955" alt="image" src="https://github.com/user-attachments/assets/3c20786b-0915-43f5-aa5f-ae865c8f3973" />


