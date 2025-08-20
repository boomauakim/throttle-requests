# Throttle Requests

This is a simple Cloudflare Worker that throttles requests to a given URL. It acts as a proxy that introduces a specified delay before forwarding the request to the destination URL.

## Usage

You can use this service by sending a GET request to the root URL (`/`) with the following query parameters:

- `ms`: The delay in milliseconds to wait before forwarding the request. This must be a numeric string.
- `url`: The URL to which the request should be forwarded.

### Example

Here's an example of how to use the service with `curl`:

```bash
curl "https://<YOUR_WORKER_URL>/?ms=1000&url=https://api.github.com/users/github"
```

This command will delay the request to `https://api.github.com/users/github` by 1000 milliseconds (1 second).

## Local Development

To run the service locally for development, follow these steps:

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

This will start a local server, and you can test the service by sending requests to `http://localhost:8787`.

## Deployment

To deploy the worker to Cloudflare, run the following command:

```bash
npm run deploy
```

This command will build and publish the worker to your Cloudflare account. Make sure you have configured your `wrangler.toml` file with your account details.
