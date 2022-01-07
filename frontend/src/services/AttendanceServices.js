import http from "../http-common";

class AttendanceData {
  getAll() {
    return http.get("/absensi");
  }

  get(id) {
    return http.get(`/absensi/${id}`);
  }

  create(data) {
    return http.post("/absensi", data);
  }

  update(id, data) {
    return http.put(`/absensi/${id}`, data);
  }

  delete(id) {
    return http.delete(`/absensi/${id}`);
  }

  deleteAll() {
    return http.delete(`/absensi`);
  }

  findByTitle(title) {
    return http.get(`/absensi?title=${title}`);
  }
}

export default new AttendanceData();
