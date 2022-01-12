module.exports = (app) => {
  const absensi = require("../controllers/absensi.controller.js");

  var router = require("express").Router();

  // Create a new
  router.post("/absensi", absensi.create);

  // Retrieve all
  router.get("/absensi", absensi.findAll);

  router.get("/dashboard/:id", absensi.getTodayById);

  router.get("/history/:id", absensi.getHistoryById);

  router.get("/dashboard/", absensi.getToday);

  // Retrieve all published
  router.get("/published", absensi.findAllPublished);

  // Retrieve a single  with id
  router.get("/absensi/date/:id", absensi.findDate);

  // Update a  with id
  router.put("/absensi/:id", absensi.update);

  // Delete a  with id
  router.delete("/absensi/:id", absensi.delete);

  // Delete all
  router.delete("/", absensi.deleteAll);

  app.use("/api", router);
};
