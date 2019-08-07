const config = require("./utils/config");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = express();
const api = supertest(app);
const cors = require("cors");
const blogsRouter = require("./controllers/blogs");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => logger.info("connected to MongoDB"))
  .catch(e => logger.error("error connection to MongoDB:", e.message));

app.use(cors());
//app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
