<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-6">
      <Card>
        <template v-slot:login>
          <h5 class="card-title text-center">Admin Login</h5>
          <form class="form-group d-flex justify-content-center">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                name="username"
                required
              />
              <br />
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
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

export default {
  components: { Card },
  data() {
    return {
      action: "abc",
      method: "post",
    };
  },
};
</script>

<style scoped>
.row {
  margin-top: 15%;
}
</style>
