const express = require("express");

const estudiantesRoutes = require("./routes/estudiantes.routes");

const app = express();

app.use (express.json());

app.get("/", (req, res) => {
    res.send("Api funcionando correctamente");
});

app.use("/estudiantes", estudiantesRoutes);

module.exports = app;