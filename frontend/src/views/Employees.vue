<template>
  <TableTemplate>
    <template v-slot:title> Employee's Data </template>
    <template v-slot:button-add>
      <router-link to="/employees/new" class="btn btn-outline-secondary mb-2"
        >New Data</router-link
      >
    </template>
    <template v-slot:search>
      <label for="cari" class="form-label">Search :</label>
      <input type="text" class="form-control-sm mb-2" name="cari" id="cari" />
    </template>
    <template v-slot:table>
      <table id="" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Shift</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gananta</td>
            <td>Morning</td>
            <td>
              <router-link to="/employees/new" class="btn btn-outline-primary"
                >Edit</router-link
              >
              <router-link to="/employees/new" class="btn btn-outline-success"
                >History</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </TableTemplate>
</template>

<script>
import TableTemplate from "@/components/TableTemplate.vue";
export default {
  components: { TableTemplate },
};
</script>

<style></style>
