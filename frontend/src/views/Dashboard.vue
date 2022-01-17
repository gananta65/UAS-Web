<template>
  <TableTemplate>
    <template v-slot:title> Attendances Today </template>
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
    <template v-slot:table>
      <table id="" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Shift</th>
            <th>Time</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in result" :key="res.id">
            <td>{{ res.id_karyawan }}</td>
            <td>{{ res.nama_karyawan }}</td>
            <td>{{ res.shift }}</td>
            <td>{{ res.jam }}</td>
            <td>{{ res.status }}</td>
            <td>
              <input
                :disabled="res.status == 'On Time'"
                type="text"
                class="form-control"
                name="reason"
                v-model="res.reason"
                id="reason"
              />
            </td>
            <td>
              <button
                :disabled="res.status == 'On Time'"
                @click="
                  res.tanggal = dateFormat(res.tanggal);
                  editConfirm(res.id_absensi, res);
                "
                class="btn btn-outline-primary"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
  methods: {
    editConfirm(id, data) {
      console.log("berhasil");
      swal({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.postReason(id, data);
        }
      });
    },
    checkSearch() {
      if (this.search == "") {
        this.getAllData();
      }
    },
    async getAllData() {
      try {
        const res = await AttendanceServices.getToday();

        this.result = res.data;

        console.log(this.result);
      } catch (err) {
        console.log(err);
      }
    },
    async getByTitle() {
      try {
        const res = await AttendanceServices.searchById(this.search);

        this.result = res.data;

        console.log(this.result);
      } catch (err) {
        this.getAllData();
      }
    },
    async postReason(id, data) {
      if (this.result) {
        try {
          const res = await AttendanceServices.update(id, data);
          if (res) {
            this.inputSuccess();
            this.$router.push("/employees");
            console.log("success!");
          }
        } catch (err) {
          console.log(err);
        }
      }
    },
    dateFormat(tanggal) {
      let p = new Date(tanggal);
      p.setDate(p.getDate() + 1);
      let tgl = p.toISOString().slice(0, 10);
      return tgl;
    },
  },

  mounted() {
    this.getAllData();
  },
};
</script>

<style></style>
