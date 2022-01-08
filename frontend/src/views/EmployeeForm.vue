<template>
  <Card class="mt-5">
    <template v-slot:login>
      <h5 class="card-title">New Employee</h5>
      <form
        @submit.prevent="submitForm"
        class="form-group d-flex justify-content-center"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="employee.nama_karyawan"
            name="nama"
            required
          />
          <br />
          <label for="shift">Shift</label>
          <select class="form-select" v-model="employee.shift" required>
            <option value="Malam">Night</option>
            <option value="Pagi">Day</option>
          </select>
          <br />
          <button type="submit" class="form-control" name="submit">
            Submit
          </button>
        </div>
      </form>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import swal from "sweetalert";
import EmployeeServices from "../services/EmployeeServices.js";

export default {
  components: { Card },
  data() {
    return {
      employee: {
        id_karyawan: null,
        nama_karyawan: "",
        shift: "",
      },
    };
  },
  methods: {
    async submitForm() {
      console.log("terklik!");
      if (this.employee) {
        try {
          const res = await EmployeeServices.create(this.employee);
          if (res) {
            this.inputSuccess();
            this.$router.push("/employees");
            console.log("success!");
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    inputSuccess() {
      swal({
        title: `Success!`,
        text: `Data Created Successfull!`,
        icon: "success",
        button: "Okay!",
      });
    },
  },
};
</script>

<style></style>
