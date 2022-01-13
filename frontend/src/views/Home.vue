<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-6">
      <Card>
        <template v-slot:login>
          <h5 class="card-title">Scan/Input Your ID Card Code</h5>
          <form
            @submit.prevent="submitForm"
            class="form-group d-flex justify-content-center"
          >
            <div class="form-group">
              <input
                type="text"
                @keypress="onlyNumber"
                class="form-control"
                v-model="id"
                name="id"
                required
              />
              <br />
              <input type="submit" class="form-control" name="submit" />
            </div>
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import EmployeeServices from "../services/EmployeeServices.js";
import AttendanceServices from "../services/AttendanceServices.js";
import swal from "sweetalert";

export default {
  components: { Card },
  data() {
    return {
      id: "",
      isAttended: null,
      attendance: {
        id_absensi: null,
        id_karyawan: "",
        tanggal: "",
        jam: "",
        reason: "",
        status: "",
      },
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async addAttendance(status) {
      // POST request using axios with async/await
      const id = this.id;
      let tgl = this.now().toISOString().slice(0, 10);
      let jm = this.timeFormat(this.now());
      const attendance = {
        id_absensi: null,
        id_karyawan: id,
        tanggal: tgl,
        jam: jm,
        reason: null,
        status: status,
      };
      const response = await AttendanceServices.create(attendance);
      this.articleId = response.data.id;
    },
    now() {
      var today = new Date();
      today.setDate(today.getDate() + 1);
      return today;
    },
    async getAttendance() {
      const id = this.id;
      try {
        const res = await AttendanceServices.getByDate(id);
        this.isAttended = res.data.count;
      } catch (err) {
        this.isAttended = this.fortmatResponse(err.response?.data) || err;
      }
    },
    timeFormat(time) {
      var p;
      p = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
      return p;
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    AttendanceFailed() {
      swal({
        text: `Employee with id ${this.id} not found`,
      });
    },
    AttendanceExist() {
      console.log(this.timeFormat(this.now()));
      swal({
        text: `Employee with id ${this.id} already Attended`,
      });
    },
    AttendanceSuccess(name, shift) {
      var start = new Date();
      var end = new Date();
      if (shift == "Malam") {
        start.setHours(19, 10, 0);
        end.setHours(20, 10, 0);
        if (this.now() < start) {
          this.addAttendance("On Time");
          swal({
            title: `Passed! (schedule at ${this.timeFormat(start)})`,
            text: `${name} Attended at ${this.timeFormat(this.now())}!`,
            icon: "success",
            button: "Okay!",
          });
        } else {
          this.addAttendance("Late");
          swal({
            title: `Late! (schedule at ${this.timeFormat(start)})`,
            text: `${name} Attended at ${this.timeFormat(this.now())}!`,
            icon: "warning",
            button: "Okay!",
          });
        }
      } else {
        start.setHours(7, 10, 0);
        end.setHours(13, 10, 0);
        if (this.now() < start) {
          this.addAttendance("On Time");
          swal({
            title: `Passed! (schedule at ${this.timeFormat(start)})`,
            text: `${name} Attended at ${this.timeFormat(this.now())}!`,
            icon: "success",
            button: "Okay!",
          });
        } else {
          this.addAttendance("Late");
          swal({
            title: `Late! (schedule at ${this.timeFormat(start)})`,
            text: `${name} Attended at ${this.timeFormat(this.now())}!`,
            icon: "warning",
            button: "Okay!",
          });
        }
      }
    },
    async submitForm() {
      const id = this.id;
      if (id) {
        this.getAttendance();
        try {
          const res = await EmployeeServices.get(`${id}`);
          const result = {
            data: res.data,
          };
          // const result = {
          //   data: res.data,
          //   status: res.status,
          //   statusText: res.statusText,
          //   headers: res.headers,
          //   config: res.config,
          // };
          if (this.attended !== null) {
            if (this.isAttended == 0) {
              this.AttendanceSuccess(
                result.data.nama_karyawan,
                result.data.shift
              );
            } else {
              this.AttendanceExist();
            }
          }
          console.log(this.isAttended);
          this.id = "";
        } catch (err) {
          this.getResult = this.fortmatResponse(err.response?.data) || err;
          if (err.response && err.response.status === 404) {
            // console.clear();
          }
          this.AttendanceFailed();
          this.id = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 15%;
}
</style>
