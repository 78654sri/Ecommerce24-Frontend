### Project Video
## User Side
https://github.com/user-attachments/assets/71187c42-1fe4-4603-b324-71d3b13c3231
## Admin side

https://github.com/user-attachments/assets/7214be1c-f9ad-472b-9e93-2c1f3b464df5

# Features

## Product and Category Management
1)CRUD Operations: Create, read, update, and delete products and categories.
<br>
2)Image Uploads: Upload images for products, managed by the server.
<br>
3)Product Card Components: Display products with custom reusable card components.

## Advanced Product Browsing
1)Search and Filter: Search and filter products by name, category, price, etc.
<br>
2)Category-based Products: Display products based on selected categories.
<br>
3)Sorting: Sort products by creation date or popularity (sold quantity).
<br>
4)Stock Management: Track product stock status and update sold quantity.

## User and Cart Features
1)Suggestive Selling: View related products on product pages.
<br>
2)User Cart: Add items to the cart and manage the shopping cart.
<br>
3)Order History: Track past orders with product details and dates.

## Admin and User Dashboards
1)Admin Dashboard: Manage orders, products, categories, and users.
<br>
2)Order Management: Admins can view, update, and manage order statuses.

## Security and Payments
1)Protected Routes: Restrict certain routes to logged-in users or admin only.
<br>
2)Role-Based Access: Different access levels for admin and user accounts.
<br>
3)Braintree Payment Integration: Supports credit card and PayPal payments.

# Technologies Used


1)Frontend: React, Bootstrap,css
<br>
2)Backend: Node.js, Express.js, MongoDB
<br>
3)Payment: Braintree for handling credit card and PayPal payments
<br>
1\4)Authentication: JSON Web Tokens (JWT)

# API Endpoints

## Authentication
POST /api/auth/register - Register new user
<br>
POST /api/auth/login - Login user
<br>
GET /api/auth/logout - Logout user

## Product Management
GET /api/products - Fetch all products
<br>
POST /api/products - Create new product (Admin only)
<br>
PUT /api/products/:id - Update product (Admin only)
<br>
DELETE /api/products/:id - Delete product (Admin only)


