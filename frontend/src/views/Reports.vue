<template>
  <TableTemplate>
    <template v-slot:title> Reports </template>
    <template v-slot:button-add> </template>
    <template v-slot:search>
      <label for="cari" class="form-label">Date from</label>
      <input type="date" class="form-control-sm mb-2" name="start" id="start" />
      <label for="cari" class="form-label">To</label>
      <input type="date" class="form-control-sm mb-2" name="end" id="end" />
    </template>
    <template v-slot:table>
      <table id="" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>On Time</th>
            <th>Reasonable Late</th>
            <th>Late</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0000xxx</td>
            <td>Gannata</td>
            <td>28</td>
            <td>1</td>
            <td>2</td>
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
