import http from "../http-common";

class EmployeeData {
  getAll() {
    return http.get("/karyawan/");
  }

  get(id) {
    return http.get(`/karyawan/get/${id}`);
  }

  create(data) {
    return http.post("/karyawan", data);
  }

  update(id, data) {
    return http.put(`/karyawan/${id}`, data);
  }

  delete(id) {
    return http.delete(`/karyawan/${id}`);
  }

  deleteAll() {
    return http.delete(`/karyawan`);
  }

  findByName(id) {
    return http.get(`/karyawan/s/${id}`);
  }
}

export default new EmployeeData();
