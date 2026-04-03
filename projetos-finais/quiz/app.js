const express = require('express');
const quizRoutes = require("./quizRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/quiz", quizRoutes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});