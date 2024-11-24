# MarketU

The Student Marketplace is a platform where students can buy and sell products and services to each other. It features personalized dashboards, the ability to set up storefronts, explore listings with advanced filters, and a seamless checkout process powered by Stripe API. Users can also leave reviews for their purchases.

## Table of Contents

- [Types of Users](#types-of-users)
- [Pages](#pages)
  - [Home Page](#home-page)
  - [Explore Page](#explore-page)
  - [Dashboard](#dashboard)
  - [Storefront](#storefront)
  - [Product/Service Page](#product-service-page)
  - [Navigation Bar](#navigation-bar)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Types of Users

### Unregistered Users
Unregistered users can explore MarketU to view products and services but cannot make purchases, leave reviews, or set up storefronts. They are prompted to log in or register for an account to access these features.

### Registered Users
Registered users have full capabilities on MarketU, including all unregistered user capabilities. In addition, they are able to buy products and services through the platform, set up storefronts and create listings, view and manage sales via their dashboard, leave reviews for their purchases..

## Pages

### Home Page: Advanced search and filters.

Through Soundcrate's homepage, viewers can see new music releases on Spotify and popular reviews from other users.

### Explore Page: Search for your favorite songs and albums easily.

The Explore Page allows users to browse listings using various filters like category, price range, seller rating, and location. Users can easily find what they need, from second-hand furniture to personal services.

### Dashboard: Manage your activity at a glance.

The Dashboard provides registered users with an overview of their sales, purchases, and reviews. It includes analytics on their storefront performance, such as the number of views and sales for their listings.

### Storefront Page: Personalized online shop for students.

Users can create a storefront to showcase their listings, including products and services. Storefronts display seller information, ratings, and all active listings.

### Product/Service Page: View detailed listings.

Each listing features detailed information about the product or service, including price, description, seller details, and reviews. Buyers can purchase items directly through Stripe API and leave reviews post-purchase.

### Profile Page: View and manage your account.

The Profile Page shows user details, purchase history, and re

### Navigation Bar: Easy access to MarketU's various pages.

On every page on MarketU, users will be able to directly visit other pages through the navigation bar. The navigation bar has 4 main pages:
- **MarketU:** By clicking on MarketU, users are redirected to the homepage.
- **Search:** Through Search, users can visit the explore page.
- **Profile:**
  -  Unregistered Users: Unregistered users can either Register or Login.
  -  Registered Users: Registered users can click on their profile icon to reveal a dropdown, allowing them to visit the following pages:
      - Dashboard: Visit their profile page.
      - Storefront: Visit their storefront.
      - Account Settings: Update their email or password, card on file, and other user settings.
      - Logout: Log out of their account.


## Technologies Used

- **JavaScript**
- **React.js**: For building the user interface
- **Node.js**: For the backend server
- **Express.js**: For handling API requests
- **MongoDB**: For the database
- **Stripe API**: For secure payments
- **Tailwind CSS**: For responsive styling
