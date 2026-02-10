require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.set('json spaces', 0); // Compact JSON formatting
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BFHL API Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: "harshit0876.be23@chitkara.edu.in"
  });
});

app.post("/bfhl", async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({ is_success: false });
    }

    const key = keys[0];
    const value = req.body[key];
    let data;

    if (key === "fibonacci") {
      if (typeof value !== "number" || value < 0) throw "";

      let a = 0, b = 1;
      data = [];

      for (let i = 0; i < value; i++) {
        data.push(a);
        [a, b] = [b, a + b];
      }
    }

    else if (key === "prime") {
      if (!Array.isArray(value)) throw "";

      const isPrime = n => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) return false;
        }
        return true;
      };

      data = value.filter(isPrime);
    }

    else if (key === "lcm") {
      if (!Array.isArray(value) || value.length === 0) throw "";

      const gcd = (a,b)=>b===0?a:gcd(b,a%b);
      data = value.reduce((l,n)=> (l*n)/gcd(l,n));
    }

    else if (key === "hcf") {
      if (!Array.isArray(value) || value.length === 0) throw "";

      const gcd = (a,b)=>b===0?a:gcd(b,a%b);
      data = value.reduce((a,b)=>gcd(a,b));
    }

    else if (key === "AI") {
      if (typeof value !== "string") throw "";

      try {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            contents: [{
              parts: [{
                text: value + " Answer with just the direct answer only, no extra text, no formatting, no explanation."
              }]
            }],
            generationConfig: {
              maxOutputTokens: 500,
              temperature: 0.3
            }
          },
          {
            headers: { 'Content-Type': 'application/json' },
            timeout: 30000
          }
        );

        const aiText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (aiText) {
          // Clean up the response - remove markdown formatting and extra text
          data = aiText.replace(/\*\*/g, '').replace(/\*/g, '').trim();
        } else {
          throw new Error('Empty AI response');
        }
      } catch (error) {
        console.error('AI API Error:', error.response?.data?.error || error.message);
        data = "Error";
      }
    }

    else {
      return res.status(400).json({ is_success: false });
    }

    res.status(200).json({
      is_success: true,
      official_email: "harshit0876.be23@chitkara.edu.in",
      data
    });

  } catch {
    res.status(500).json({ is_success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));

// Export for Vercel
module.exports = app;
