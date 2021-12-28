<template>
  <Card>
    <template v-slot:login>
      <h5 class="card-title">Admin Login</h5>
      <FormTemplate
        :action="action"
        :method="method"
        class="form-group d-flex justify-content-center"
      >
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" name="username" required />
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
      </FormTemplate>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";
import FormTemplate from "@/components/FormTemplate.vue";

export default {
  components: { Card, FormTemplate },
};
</script>

<style></style>
