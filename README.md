# KarigarConnect: AI-Powered Artisan Outreach

KarigarConnect is a creator-commerce platform powered by the Gemini 2.5 Flash Lite API. It uses AI to dynamically analyze artisan products, match them with influencers using text-embeddings, and forecast revenue using a predictive algorithm.

## How It Works
The frontend is built with **Next.js 14**, and the backend is built with **Python (FastAPI)**. It is designed to be deployed seamlessly on **Vercel**, which automatically handles the Python `/api` serverless functions.

## How to Run Locally

If you clone this repository and want to run it on your own machine, you must run *both* the Next.js frontend server and the Python FastAPI backend server simultaneously.

### 1. Set up your Environment Variables
Create a `.env` file in the root of the project and add your Gemini API Key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 2. Start the Python Backend
The Python backend handles all the AI processing. You need to install the requirements and start the Uvicorn server.
```bash
# Install Python dependencies
pip install fastapi uvicorn google-genai python-dotenv pydantic

# Start the FastAPI server on port 8000
cd api
uvicorn index:app --reload --port 8000
```

### 3. Start the Next.js Frontend
Open a new terminal window, navigate to the root directory, and start Next.js.
```bash
# Install Node dependencies
npm install

# Start the Next.js frontend on port 3000
npm run dev
```

*Note: The `next.config.ts` has been configured to automatically rewrite `/api/*` requests to your local Python server (`http://127.0.0.1:8000`) during development!*

## Deployment
This project is pre-configured for Vercel. Simply push the code to GitHub and import the repository into Vercel. Vercel will automatically detect the `/api` directory and deploy it as Python Serverless Functions. Remember to add your `GEMINI_API_KEY` to the Vercel Environment Variables in your project settings!
