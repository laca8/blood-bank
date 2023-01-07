const express = require("express");
const connectDB = require("./config/db");
const users = require("./routes/userRoute");
const donors = require("./routes/donorRoute");

const path = require("path");

require("dotenv").config({ path: "config/config.env" });
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use("/api/user", users);
app.use("/api/donor", donors);

//build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
