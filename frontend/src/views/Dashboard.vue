<template>
  <TableTemplate>
    <template v-slot:title> Hi Admin! </template>
    <template v-slot:search>
      <label for="cari" class="form-label">Search by ID:</label>
      <input
        type="text"
        v-model="search"
        class="form-control-sm mb-2"
        @input="getByTitle"
        name="cari"
        id="cari"
      />
    </template>
  </TableTemplate>
</template>

<script>
import TableTemplate from "@/components/TableTemplate.vue";
import swal from "sweetalert";
import AttendanceServices from "../services/AttendanceServices.js";
export default {
  components: { TableTemplate },
  data() {
    return {
      result: null,
      search: null,
    };
  },
  methods: {},

  mounted() {
    this.getAllData();
  },
};
</script>

<style></style>
