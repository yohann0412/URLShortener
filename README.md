# URL Shortener Project

This project provides a simple URL shortening service built using Node.js, Express, MongoDB for the backend, and React for the frontend.

## Features
- **Shorten URLs:** Convert long URLs into short, easy-to-share links.
- **Redirect:** Navigate users to the original URL when accessing the shortened link.
- **Dashboard:** View a dashboard displaying created short URLs and their statistics.

## Requirements
- Node.js and npm installed locally.
- MongoDB server running locally or remotely.

## Installation

### Backend Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the node server:**
    ```bash
    npm run startServer
    ```
4. **Set up environment variables:**
    - Create a `.env` file based on the provided `.env.example` and configure MongoDB connection details.

5. **Start the frontend server:**
    ```bash
    npm start
    ```

### Frontend Setup
1. **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the React development server:**
    ```bash
    npm start
    ```

## Usage
- Access the application by navigating to [http://localhost:3001](http://localhost:3001) in your browser.
- Use the interface to create shortened URLs and view statistics.
- Access the API endpoints for URL shortening functionality.

## API Endpoints
- `POST /api/shorten`: Create a shortened URL.
- `GET /:shortCode`: Redirect to the original URL associated with the provided short code.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

## License
This project is licensed under the MIT License.
