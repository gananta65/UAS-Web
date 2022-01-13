<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-6">
      <Card>
        <template v-slot:login>
          <h5 class="card-title text-center">Admin Login</h5>
          <form
            @submit.prevent="login"
            class="form-group d-flex justify-content-center"
          >
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                name="username"
                required
              />
              <br />
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                name="password"
                required
              />
              <br />
              <button type="submit" class="form-control">Login</button>
            </div>
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Swal from "sweetalert";
import axios from "axios";

export default {
  components: { Card },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/admin/login?username=${this.username}&password=${this.password}`
        );
        if (res.data) {
          localStorage.setItem("login", true);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("level", "admin");
          if (res.data.level === "admin") {
            this.$router.push("/kasir");
          } else {
            this.$router.push("/dashboard");
          }
        }
      } catch (err) {
        console.clear();
        Swal({
          title: "Error!",
          text: "Username atau password salah!",
          icon: "error",
          button: "Confirm",
        });
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
