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
import swal from "sweetalert";

export default {
  components: { Card },
  data() {
    return {
      id: "",
      attendance: {
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
    now() {
      var today = new Date();
      return today;
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
    AttendanceSuccess(name, shift) {
      var start = new Date();
      var end = new Date();
      if (shift == "malam") {
        start.setHours(19, 0, 0);
        end.setHours(20, 0, 0);
        if (this.now() < start) {
          swal({
            title: "On Time!",
            text: `${name} Attended at ${this.now()}!`,
            icon: "success",
            button: "Okay!",
          });
        } else {
          swal({
            title: "Late!",
            text: `"${name} Attended at ${this.now()}!"`,
            icon: "warning",
            button: "Okay!",
          });
        }
      } else {
        start.setHours(7, 0, 0);
        end.setHours(13, 0, 0);
        if (this.now() < start) {
          swal({
            title: "On Time!",
            text: `${name} Attended at ${this.now()}!`,
            icon: "success",
            button: "Okay!",
          });
        } else {
          swal({
            title: "Late!",
            text: `"${name} Attended at ${this.now()}!"`,
            icon: "warning",
            button: "Okay!",
          });
        }
      }
    },
    async submitForm() {
      const id = this.id;
      if (id) {
        try {
          const res = await EmployeeServices.get(`${id}`);
          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };
          // const result = {
          //   data: res.data,
          //   status: res.status,
          //   statusText: res.statusText,
          //   headers: res.headers,
          //   config: res.config,
          // };
          this.getResult = this.fortmatResponse(result);

          this.AttendanceSuccess(result.data.nama_karyawan, result.data.shift);
          console.log(this.getTime());
          this.id = "";
        } catch (err) {
          this.getResult = this.fortmatResponse(err.response?.data) || err;
          console.log(err);
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
