<template>
  <Card>
    <template v-slot:login>
      <h5 class="card-title">Edit Employee</h5>

      <form class="form-group d-flex justify-content-center">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" name="nama" required />
          <br />
          <label for="shift">Shift</label>
          <input type="text" class="form-control" name="shift" required />
          <br />
          <button type="submit" class="form-control">Edit</button>
        </div>
      </form>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: { Card },
};
</script>

<style></style>
