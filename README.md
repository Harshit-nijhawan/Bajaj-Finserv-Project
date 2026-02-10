# BFHL API

Production-ready Express REST API for Bajaj Finserv Health assessment.

## Features

- ✅ Health check endpoint
- ✅ Fibonacci series generator
- ✅ Prime number filter
- ✅ LCM calculator
- ✅ HCF calculator
- ✅ AI-powered single word responses (Google Gemini)

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   GEMINI_API_KEY=your_actual_api_key
   PORT=3000
   ```

3. **Get Gemini API Key:**
   - Visit: https://makersuite.google.com/app/apikey
   - Create a new API key
   - Add it to your `.env` file

4. **Run locally:**
   ```bash
   npm start
   ```

Server will start on http://localhost:3000

## API Endpoints

### GET /
Returns: `"BFHL API Running"`

### GET /health
Returns:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in"
}
```

### POST /bfhl

Send exactly ONE key in the request body:

**Fibonacci:**
```json
{ "fibonacci": 5 }
```
Response:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5]
}
```

**Prime:**
```json
{ "prime": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
```
Response:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in",
  "data": [2, 3, 5, 7]
}
```

**LCM:**
```json
{ "lcm": [12, 18, 24] }
```

**HCF:**
```json
{ "hcf": [12, 18, 24] }
```

**AI:**
```json
{ "AI": "Capital of India" }
```
Response:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in",
  "data": "Delhi"
}
```

## Error Handling

- Invalid input → `400 Bad Request`
- Multiple keys → `400 Bad Request`
- Server error → `500 Internal Server Error`
- Gemini failure → Fallback to "Mumbai"

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

# Fibonacci
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'

# Prime
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"prime": [2, 3, 4, 5, 6, 7, 8, 9]}'

# AI
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"AI": "What is the color of sky?"}'
```

## Author

Built for Bajaj Finserv Health Live Coding Assessment
