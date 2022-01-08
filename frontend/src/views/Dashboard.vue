<template>
  <div class="container">
    <h1 class="text-center">Hi Admin!!</h1>
    <TableTemplate>
      <template v-slot:title> Attendances History Today (08-01-2022) </template>
      <template v-slot:button-add> </template>
      <template v-slot:table>
        <table id="" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0000xxx</td>
              <td>Gannata</td>
              <td>28</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="reason"
                  id="reason"
                />
              </td>
              <td>
                <router-link to="/employees/new" class="btn btn-outline-primary"
                  >Edit</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </TableTemplate>
  </div>
</template>

<script>
import TableTemplate from "@/components/TableTemplate.vue";
export default {
  components: { TableTemplate },
};
</script>

<style></style>
