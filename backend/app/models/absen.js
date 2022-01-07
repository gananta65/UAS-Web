const sql = require("./db.js");

// constructor
const Absensi = function(absensi) {
  this.id_absensi = absensi.id_absensi;
  this.id_karyawan = absensi.id_karyawan;
  this.tanggal = absensi.tanggal;
  this.jam = absensi.jam;
  this.reason = absensi.reason;
  this.status = absensi.status;

Absensi.findById = (id, result) => {
  sql.query(`SELECT * FROM absensi WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found absensi: ", res[0]);
      result(null, res[0]);
      return;
    }
	
	result({ kind: "not_found" }, null);
  }
}

Absensi.getAll = (id_absensi, result) => {
  let query = "SELECT * FROM absensi";

  if (id_absensi) {
    query += ` WHERE title LIKE '%${id_absensi}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("absensi: ", res);
    result(null, res);
  });
};

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Absensi.updateById(
      req.params.id,
      new Absensi(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Anda belum melakukan absensi.`
            });
          } else {
            res.status(200).send({
              message: "Anda sudah melakukan absensi" + req.params.id
            });
          }
        } else res.send(data);
      }
    );
};