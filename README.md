# Chat with Any Website Tool

This project allows you to chat with any website by prepending `localhost:3000` (or your hosted website) to the URL. It uses Next.js, middleware, dynamic routes, and modern AI approaches to provide this functionality. The project leverages Upstash for free-tier services, requiring no credit card.

## Features

* **Chat with Any Website:** Interact with the content of any website by simply prepending your application's URL.
* **Dynamic Routes:** Uses Next.js dynamic routes to handle any website URL.
* **AI-Powered Chat:** Integrates with `rag-chat` to provide intelligent responses based on website content.
* **Vector Database:** Utilizes Upstash as a vector database to store and retrieve website data.
* **Re-indexing Prevention:** Uses Upstash Redis to prevent re-indexing of already processed websites.
* **Session Management:** Implements middleware for unique sessions for each user and website.
* **Real-time Chat UI:** Features a modern and interactive chat interface built with Tailwind CSS and Next UI.
* **Message Persistence:** Stores chat messages in Redis for a seamless user experience.

## Technologies Used

* **Next.js:** React framework for building server-rendered applications.
* **`@upstash/rag-chat`:** Package for integrating AI chat functionality.
* **Upstash:** Serverless database platform (Vector and Redis).
* **`@vercel/ai` SDK:** For chat functionality.
* **Tailwind CSS:** Utility-first CSS framework.
* **Next UI:** React UI library.
* **TypeScript:** Static typing for enhanced code quality.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shreyashdeep/ask-this-site.git
    cd ask-this-site
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    # or
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    * Create a `.env.local` file in the root directory.
    * Add the following environment variables:

        ```
        UPSTASH_VECTOR_REST_URL=your_upstash_vector_rest_url
        UPSTASH_VECTOR_REST_TOKEN=your_upstash_vector_rest_token
        UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
        UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
        NEXTAUTH_SECRET=a_strong_random_secret
        ```

    * Replace `your_upstash_vector_rest_url`, `your_upstash_vector_rest_token`, `your_upstash_redis_rest_url`, and `your_upstash_redis_rest_token` with your Upstash credentials.
    * Generate a strong random string for `NEXTAUTH_SECRET`.

4.  **Run the development server:**

    ```bash
    bun dev
    # or
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser and navigate to `http://localhost:3000`.**

## Usage

1.  To chat with a website, prepend `localhost:3000/` (or your deployed URL) to the website's URL. For example, to chat with `https://www.example.com`, navigate to `http://localhost:3000/https://www.example.com`.
2.  Start typing your questions in the chat input.

## Deployment

* Deploy your Next.js application to a hosting platform like Vercel, Netlify, or AWS Amplify.
* Remember to set your environment variables in your hosting platform's settings.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Contact

* Shreyash Deep
* Email: mail2shreyashdeep@gmail.com
* X : https://x.com/ShreyashDeep1
* LinkedIn : linkedin.com/in/shreyashdeep
