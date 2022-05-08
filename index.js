// const express = require("express");
// const app = express();
// const port = process.env.PORT || 2087;
// const winston = require("winston");

// require("./startup/logging")();
// require("./startup/routes")(app);
// require("./startup/db")();

// app.get("/", (req, res) => {
//   res.send({ message: "Weclome to Node REST API" });
// });

// const server = app.listen(port, () => {
//   winston.info(`Listening on port ${port}...`);
// });

// module.exports = server;
// // 

const express = require("express");
const app = express();
const users = require("./routes/users");

app.use(express.json({ extended: false }));

app.use("/api/users", users);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));