const express = require("express");
const usersRoutes = require("./routes/users");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `<div>
      <a href="/">home</a><br> <a href="/users">users</a>
    </div>`
  );
});
app.use("/users", usersRoutes);
app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
