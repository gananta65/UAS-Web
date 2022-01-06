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
import AttendanceServices from "../services/AttendanceServices";
import swal from "sweetalert";

export default {
  components: { Card },
  data() {
    return {
      id: "",
      attendance: {
        id_absensi: null,
        id_karyawan: null,
        tanggal: null,
        jam: "",
        reason: null,
        status: "",
      },
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    loginFail() {
      swal({
        text: `Sorry, we have problems right now!`,
      });
    },
    loginSuccess() {
      swal({
        text: `Attendance for ${this.id} recorded at time. You are late!`,
      });
    },
    submitForm() {
      axios
        .post("api/users", {
          id: this.id,
        })
        .then((response) => {
          console.log(response);
          console.log("berhasil dijalankan!");
          this.id = "";
        })
        .catch((error) => {
          console.log(error);
          console.log("gagal!");
          this.loginFail();
          this.id = "";
        });
    },
    async getDataById() {
      const id = this.$refs.get_id.value;
      if (id) {
        try {
          const res = await http.get(`/${id}`);
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
        } catch (err) {
          this.getResult = this.fortmatResponse(err.response?.data) || err;
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
