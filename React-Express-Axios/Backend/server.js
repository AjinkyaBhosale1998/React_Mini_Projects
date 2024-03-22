import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      "id": 1,
      "title": "First Item",
      "content": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 2,
      "title": "Second Item",
      "content": "What did one ocean say to the other ocean? Nothing, they just waved."
    },
    {
      "id": 3,
      "title": "Third Item",
      "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      "id": 4,
      "title": "Fourth Item",
      "content": "How does a penguin build its house? Igloos it together!"
    },
    {
      "id": 5,
      "title": "Fifth Item",
      "content": "Why did the bicycle fall over? Because it was two-tired!"
    }
  ]
  ;
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
