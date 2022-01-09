<template>
  <Card>
    <template v-slot:login>
      <h5 class="card-title">Edit Employee</h5>

      <form
        @submit.prevent="submitForm"
        class="form-group d-flex justify-content-center"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="result.nama_karyawan"
            name="nama"
            required
          />
          <br />
          <label for="shift">Shift</label>
          <select class="form-select" v-model="result.shift" required>
            <option value="Malam" :selected="result.shift == 'Malam'">
              Night
            </option>
            <option value="Pagi" :selected="result.shift == 'Pagi'">Day</option>
          </select>
          <br />
          <button type="submit" class="form-control">Edit</button>
        </div>
      </form>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import EmployeeServices from "../services/EmployeeServices";

export default {
  components: { Card },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    async getById() {
      try {
        const res = await EmployeeServices.get(this.$route.params.id);
        if (res.data) {
          this.result = res.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async submitForm() {
      if (this.result) {
        try {
          const res = await EmployeeServices.update(
            this.$route.params.id,
            this.result
          );
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
        text: `Data Edited Successfull!`,
        icon: "success",
        button: "Okay!",
      });
    },
  },
  mounted() {
    this.getById();
  },
};
</script>

<style></style>
