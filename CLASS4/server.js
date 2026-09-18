import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());  // to parse json data

import router from './routes/userRoute.js'
app.use(router);


app.listen(PORT, () => {"server is running on http://localhost:${PORT}";
  console.log(`Server is running on http://localhost:${PORT}`);
});