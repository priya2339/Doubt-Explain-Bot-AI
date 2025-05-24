// // server.js
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// // Load environment variables
// dotenv.config();

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// app.post("/ask", async (req, res) => {
//     const userPrompt = req.body.prompt;
//     const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;

//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(promptWithLang);
//         const response = await result.response;
//         const answer = response.text();

//         res.json({ answer });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Failed to get AI response" });
//     }
// });

// app.listen(port, () => {
//     console.log(`✅ Server running at http://localhost:${port}`);
// });











// // server.js
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const path = require("path");
// const fetch = require('node-fetch');


// // Load environment variables
// dotenv.config();

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// app.post("/", async (req, res) => {
//     const userPrompt = req.body.prompt;
//     console.log("Received Prompt:", userPrompt);
  
//     const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;
  
//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(promptWithLang);
//         const response = await result.response;
//         const answer = response.text();
  
//         res.json({ answer });
//     } catch (err) {
//         console.error("❌ Backend Error:", err.message);
//         console.error(err);
//         res.status(500).json({ error: "Failed to get AI response", details: err.message });
//     }
//   });

// // app.post("/", async (req, res) => {
// //     const userPrompt = req.body.prompt;
// //     const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;
  
// //     try {
// //       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// //       const result = await model.generateContent(promptWithLang);
// //       const response = await result.response;
// //       const answer = response.text();
  
// //       res.json({ answer });
// //     } catch (err) {
// //       console.error("❌ Backend Error:", err.message);
// //       res.status(500).json({ error: "Failed to get AI response" });
// //     }
// //   });
  

// app.get('/', (req, res) => {
//     res.send("Server is running")
// })

// app.use(express.static(path.join(__dirname, "../frontend")));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/index.html"));
// });

// // app.get('/backend', (req, res) => {
// //     res.json({ message: 'Hello from backend!' });
// //   });
  


// app.listen(port, () => {
//     console.log(`✅ Server running at http://localhost:${port}`);
// });

































// // server.js
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const path = require("path");
// // const fetch = require('node-fetch');


// // Load environment variables
// dotenv.config();

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// app.post("/", async (req, res) => {
//     const userPrompt = req.body.prompt;
//     console.log("Received Prompt:", userPrompt);
  
//     const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;
  
//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const result = await model.generateContent(promptWithLang);
//         const response = await result.response;
//         const answer = response.text();
  
//         res.json({ answer });
//     } catch (err) {
//         console.error("❌ Backend Error:", err.message);
//         console.error(err);
//         res.status(500).json({ error: "Failed to get AI response", details: err.message });
//     }
//   });

// // app.post("/", async (req, res) => {
// //     const userPrompt = req.body.prompt;
// //     const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;
  
// //     try {
// //       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// //       const result = await model.generateContent(promptWithLang);
// //       const response = await result.response;
// //       const answer = response.text();
  
// //       res.json({ answer });
// //     } catch (err) {
// //       console.error("❌ Backend Error:", err.message);
// //       res.status(500).json({ error: "Failed to get AI response" });
// //     }
// //   });
  

// // app.get('/', (req, res) => {
// //     res.send("Server is running")
// // })

// app.use(express.static(path.join(__dirname, "./frontend")));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "./frontend/index.html"));
// });

// // app.get('/backend', (req, res) => {
// //     res.json({ message: 'Hello from backend!' });
// //   });
  


// app.listen(port, () => {
//     console.log(`✅ Server running at http://localhost:${port}`);
// });




































// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require("path");
// const fetch = require('node-fetch');


// Load environment variables
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


app.post("/", async (req, res) => {
    const userPrompt = req.body.prompt;
    console.log("Received Prompt:", userPrompt);
  
    const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;
  
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(promptWithLang);
        const response = await result.response;
        const answer = response.text();
  
        res.json({ answer });
    } catch (err) {
        console.error("❌ Backend Error:", err.message);
        console.error(err);
        res.status(500).json({ error: "Failed to get AI response", details: err.message });
    }
  });

// app.post("/", async (req, res) => {
//     const userPrompt = req.body.prompt;
//     const promptWithLang = `Explain the following question in both English and Hindi:\n\n${userPrompt}`;
  
//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//       const result = await model.generateContent(promptWithLang);
//       const response = await result.response;
//       const answer = response.text();
  
//       res.json({ answer });
//     } catch (err) {
//       console.error("❌ Backend Error:", err.message);
//       res.status(500).json({ error: "Failed to get AI response" });
//     }
//   });
  

// app.get('/', (req, res) => {
//     res.send("Server is running")
// })

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// app.get('/backend', (req, res) => {
//     res.json({ message: 'Hello from backend!' });
//   });
  


app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});

