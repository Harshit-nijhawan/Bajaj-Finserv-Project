# BFHL API 🚀

Hey! This is a simple REST API built with Node.js and Express for the Bajaj Finserv Health coding challenge.

## What does it do?

This API has a few cool endpoints:
- **Health Check** - Just to make sure everything's running
- **Fibonacci** - Generate fibonacci numbers
- **Prime Numbers** - Filter out prime numbers from a list
- **LCM & HCF** - Calculate lowest common multiple and highest common factor
- **AI Questions** - Ask anything and get a one-word answer

## Quick Start

1. **Install everything:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

That's it! Your API is now running on http://localhost:3000

## How to use it?

### 1. Check if it's running
```
GET http://localhost:3000/health
```
You'll get back a simple JSON with status and email.

### 2. Try the main endpoint
```
POST http://localhost:3000/bfhl
```

**Send JSON with ONE key only:**

**For Fibonacci:**
```json
{ "fibonacci": 7 }
```
Returns: `[0, 1, 1, 2, 3, 5, 8]`

**For Prime Numbers:**
```json
{ "prime": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
```
Returns: `[2, 3, 5, 7]`

**For LCM:**
```json
{ "lcm": [12, 18, 24] }
```

**For HCF:**
```json
{ "hcf": [12, 18, 24] }
```

**For AI Questions:**
```json
{ "AI": "What is the capital of France?" }
```
Returns: `"Paris"`

## What if something goes wrong?

- Send wrong data type? → You get a 400 error
- Send multiple keys? → You get a 400 error  
- Something breaks on our side? → You get a 500 error
- No worries though, everything has proper error handling!

## Deploy on Render

1. Push code to GitHub
2. Go to https://render.com
3. Click "New +" → "Web Service"
4. Connect your GitHub repo
5. Set:
   - **Name:** bfhl-api
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add Environment Variable: `GEMINI_API_KEY`
7. Click "Create Web Service"

Your API will be live at: `https://bfhl-api.onrender.com`

## Testing

Use cURL, Postman, or Thunder Client:

```bash
# Health check
curl http://localhost:3000/health

# FWant to deploy it online?

**Deploy on Vercel (easiest):**
1. Push your code to GitHub
2. Go to https://vercel.com and sign up
3. Click "New Project" and import your repo
4. Click "Deploy" - that's it!

Your API will be live in 30 seconds! 🎉

**Or use Render:**
1. Go to https://render.com
2. Create a new Web Service
3. Connect your GitHub repo
4. Set start command: `npm start`
5. Deploy!

## Testing

Use Postman, Thunder Client, or even your browser for GET requests!

**Quick test with PowerShell:**
```powershell
Invoke-RestMethod -Uri http://localhost:3000/health
```

## Made with ❤️

Built for Bajaj Finserv Health Assessment
Simple, clean, and production-ready!