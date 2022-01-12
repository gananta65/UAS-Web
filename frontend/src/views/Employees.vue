<template>
  <TableTemplate>
    <template v-slot:title> Employee's Data </template>
    <template v-slot:button-add>
      <router-link to="/employees/new" class="btn btn-outline-secondary mb-2"
        >New Data</router-link
      >
    </template>
    <template v-slot:search>
      <label for="cari" class="form-label">Search:</label>
      <input
        type="text"
        v-model="search"
        class="form-control-sm mb-2"
        @input="getByTitle"
        name="cari"
        id="cari"
      />
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
          <tr v-for="res in result" :key="res.id">
            <td>{{ res.id_karyawan }}</td>
            <td>{{ res.nama_karyawan }}</td>
            <td>{{ res.shift }}</td>
            <td>
              <router-link
                :to="{ name: 'EmployeeEdit', params: { id: res.id_karyawan } }"
                class="btn btn-outline-primary"
                >Edit</router-link
              >
              <router-link
                to="/employees/history"
                class="btn btn-outline-success"
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
import EmployeeServices from "../services/EmployeeServices.js";
export default {
  components: { TableTemplate },
  data() {
    return {
      result: null,
      search: "",
    };
  },
  methods: {
    checkSearch() {
      if (this.search == "") {
        this.getAllData();
      }
    },
    async getAllData() {
      try {
        const res = await EmployeeServices.getAll();

        this.result = res.data;

        console.log(this.result);
      } catch (err) {
        console.log(err);
      }
    },
    async getByTitle() {
      try {
        const res = await EmployeeServices.findByName(this.search);

        if (res.status == 200) {
          this.result = res.data;
        } else {
          this.result = null;
        }
      } catch (err) {
        this.result = null;
        this.checkSearch();
        console.log(err);
      }
    },
  },

  mounted() {
    this.getAllData();
  },
};
</script>

<style></style>
