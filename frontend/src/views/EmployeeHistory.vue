<template>
  <TableTemplate>
    <template v-slot:title> Gananta's History </template>
    <template v-slot:button-add> </template>
    <template v-slot:search>
      <label for="cari" class="form-label">Search :</label>
      <input type="text" class="form-control-sm mb-2" name="cari" id="cari" />
    </template>
    <template v-slot:table>
      <table id="" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Date/Time</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>15 Januari 2021</td>
            <td>Late</td>
            <td>
              <input
                type="text"
                class="form-control-sm mb-2"
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
</template>

<script>
import TableTemplate from "@/components/TableTemplate.vue";
export default {
  components: { TableTemplate },
};
</script>

<style></style>
