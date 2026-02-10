# BFHL API

REST API built with Node.js and Express for Bajaj Finserv Health assessment.

## Installation

```bash
npm install
```

## Usage

Start the server:
```bash
npm start
```

Server runs on http://localhost:3000

## API Endpoints

### Health Check
```
GET /health
```

Returns:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in"
}
```

### Main Endpoint
```
POST /bfhl
```

Send JSON with ONE key only.

#### Fibonacci
Request:
```json
{ "fibonacci": 7 }
```

Response:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

#### Prime Numbers
Request:
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

#### LCM
Request:
```json
{ "lcm": [12, 18, 24] }
```

#### HCF
Request:
```json
{ "hcf": [12, 18, 24] }
```

#### AI Question
Request:
```json
{ "AI": "What is the capital of France?" }
```

Response:
```json
{
  "is_success": true,
  "official_email": "harshit0876.be23@chitkara.edu.in",
  "data": "Paris"
}
```

## Error Handling

- Wrong data type: 400 error
- Multiple keys in request: 400 error
- Server error: 500 error

All errors return:
```json
{ "is_success": false }
```

## Deployment

### Vercel
1. Push code to GitHub
2. Go to https://vercel.com
3. Import repository
4. Deploy

### Render
1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repository
4. Set start command: `npm start`
5. Add environment variable: `GEMINI_API_KEY`
6. Deploy

## Environment Variables

Create a `.env` file:
```
GEMINI_API_KEY=your_api_key_here
PORT=3000
```

## Testing

Using curl:
```bash
curl http://localhost:3000/health
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"fibonacci": 7}'
```

Using Postman or Thunder Client for testing endpoints.
