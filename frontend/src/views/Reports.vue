<template>
  <TableTemplate>
    <template v-slot:title> Reports </template>
    <template v-slot:button-add> </template>
    <template v-slot:search>
      <label for="cari" class="form-label">Date from</label>
      <input
        type="date"
        class="form-control-sm mb-2"
        name="start"
        v-model="tglawal"
        id="start"
      />
      <label for="cari" class="form-label">To</label>
      <input
        type="date"
        class="form-control-sm mb-2"
        v-model="tglakhir"
        name="end"
        id="end"
      />
      <button class="btn btn-success mb-2" @click="getSearch()">Search</button>
      <button
        class="btn btn-danger mb-2"
        @click="
          tglawal = '';
          tglakhir = '';
          checkSearch();
        "
      >
        Clear
      </button>
    </template>
    <template v-slot:table>
      <table id="" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Shift</th>
            <th>On Time</th>
            <th>Late</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(res, index) in result" :key="res.id">
            <td>{{ index + 1 }}</td>
            <td>{{ res.id_karyawan }}</td>
            <td>{{ res.nama_karyawan }}</td>
            <td>{{ res.shift }}</td>
            <td>{{ res.ontime }}</td>
            <td>{{ res.late }}</td>
          </tr>
          <tr>
            <td colspan="4">Total :</td>
            <td>{{ totalontime }}</td>
            <td>{{ totallate }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </TableTemplate>
</template>

<script>
import TableTemplate from "@/components/TableTemplate.vue";
import EmployeeServices from "../services/EmployeeServices.js";
import AttendanceServices from "../services/AttendanceServices.js";
import axios from "axios";
export default {
  components: { TableTemplate },
  data() {
    return {
      id: "",
      id_karyawan: [],
      result: [],
      isAttended: null,
      attendance: [],
      tglawal: "",
      tglakhir: "",
      totalontime: 0,
      totallate: 0,
    };
  },
  methods: {
    async getAllData() {
      try {
        const res = await EmployeeServices.getAll();
        for (let i = 0; i < res.data.length; i++) {
          this.id_karyawan.push(res.data[i].id_karyawan);
        }
        for (let i = 0; i < this.id_karyawan.length; i++) {
          this.getReport(this.id_karyawan[i]);
        }

        console.log(this.result);
      } catch (err) {
        console.log(err);
      }
    },
    async getReport(id) {
      try {
        let array;
        const res = await AttendanceServices.getAllReport(id);
        if (res.data) {
          array = res.data;
        }
        this.result.push(array[0]);
        this.totalontime += parseInt(array[0].ontime);
        this.totallate += parseInt(array[0].late);
      } catch (err) {
        console.log(err);
      }
    },
    async getSearch() {
      try {
        for (let i = 0; i < this.id_karyawan.length; i++) {
          this.getReportByDate(this.id_karyawan[i]);
        }
      } catch (err) {
        console.log(err);
      }
    },
    checkSearch() {
      this.result = [];
      this.totalontime = 0;
      this.totallate = 0;
      this.id_karyawan = [];
      this.getAllData();
      //this.$router.go(0);
    },
    async getReportByDate(id) {
      try {
        this.result = [];
        this.totalontime = 0;
        this.totallate = 0;
        let array;
        const res = await axios.get(
          `http://localhost:8080/api/reportByDate?karyawan=${id}&awal=${this.tglawal}&akhir=${this.tglakhir}`
        );
        if (res.data) {
          array = res.data;
          this.result.push(array[0]);
          this.totalontime += parseInt(array[0].ontime);
          this.totallate += parseInt(array[0].late);
        } else {
          this.result = [];
        }
      } catch (err) {
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
