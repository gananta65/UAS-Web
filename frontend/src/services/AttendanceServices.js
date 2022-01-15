import http from "../http-common";

class AttendanceData {
  getAll() {
    return http.get("/absensi");
  }

  getToday() {
    return http.get("/dashboard");
  }

  getByDate(id) {
    return http.get(`/absensi/date/${id}`);
  }
  getAllReport(id) {
    return http.get(`/report/${id}`);
  }
  getReportByDate(id) {
    return http.get(`/report/`);
  }
  getHistoryByDate(id) {
    return http.get(`/date/${id}`);
  }
  searchById(id) {
    return http.get(`/dashboard/${id}`);
  }
  getAttendanceById(id) {
    return http.get(`/history/${id}`);
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
