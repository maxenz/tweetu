const app = require("./app");
const port = process.env.PORT;

app.get("/prueba", (req, res) => {
  res.send("hola");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = app;
