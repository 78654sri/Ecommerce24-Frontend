### project Video
## User Side
https://github.com/user-attachments/assets/71187c42-1fe4-4603-b324-71d3b13c3231
## Admin side


# Features

## Product and Category Management
1)CRUD Operations: Create, read, update, and delete products and categories.
2)Image Uploads: Upload images for products, managed by the server.
3)Product Card Components: Display products with custom reusable card components.

## Advanced Product Browsing
1)Search and Filter: Search and filter products by name, category, price, etc.
2)Category-based Products: Display products based on selected categories.
3)Sorting: Sort products by creation date or popularity (sold quantity).
4)Stock Management: Track product stock status and update sold quantity.

## User and Cart Features
1)Suggestive Selling: View related products on product pages.
2)User Cart: Add items to the cart and manage the shopping cart.
3)Order History: Track past orders with product details and dates.

## Admin and User Dashboards
1)Admin Dashboard: Manage orders, products, categories, and users.
2)Order Management: Admins can view, update, and manage order statuses.

## Security and Payments
1)Protected Routes: Restrict certain routes to logged-in users or admin only.
2)Role-Based Access: Different access levels for admin and user accounts.
3)Braintree Payment Integration: Supports credit card and PayPal payments.

# Technologies Used


1)Frontend: React, Bootstrap
2)Backend: Node.js, Express.js, MongoDB
3)Payment: Braintree for handling credit card and PayPal payments
1\4)Authentication: JSON Web Tokens (JWT)

# API Endpoints

## Authentication
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
GET /api/auth/logout - Logout user

## Product Management
GET /api/products - Fetch all products
POST /api/products - Create new product (Admin only)
PUT /api/products/:id - Update product (Admin only)
DELETE /api/products/:id - Delete product (Admin only)


