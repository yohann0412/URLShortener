URL Shortener Project
This project provides a simple URL shortening service built using Node.js, Express, MongoDB for the backend, and React for the frontend.

Features
Shorten URLs: Convert long URLs into short, easy-to-share links.
Redirect: Navigate users to the original URL when accessing the shortened link.
Dashboard: View a dashboard displaying created short URLs and their statistics.
Requirements
Node.js and npm installed locally.
MongoDB server running locally or remotely.
Installation
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/url-shortener.git
Navigate to the backend directory:

bash
Copy code
cd url-shortener/backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file based on the provided .env.example and configure MongoDB connection details.
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
Usage
Access the application by navigating to http://localhost:3000 in your browser.
Use the interface to create shortened URLs and view statistics.
Access the API endpoints for URL shortening functionality.
API Endpoints
POST /api/shorten: Create a shortened URL.
GET /:shortCode: Redirect to the original URL associated with the provided short code.
Contributing
Feel free to contribute to this project by submitting issues or pull requests.

License
This project is licensed under the MIT License.

