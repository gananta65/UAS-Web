import http from "../http-common";

class AttendanceData {
  getAll() {
    return http.get("/attendance");
  }

  get(id) {
    return http.get(`/attendance/${id}`);
  }

  create(data) {
    return http.post("/attendance", data);
  }

  update(id, data) {
    return http.put(`/attendance/${id}`, data);
  }

  delete(id) {
    return http.delete(`/attendance/${id}`);
  }

  deleteAll() {
    return http.delete(`/attendance`);
  }

  findByTitle(title) {
    return http.get(`/attendance?title=${title}`);
  }
}

export default new AttendanceData();
