<template>
  <TableTemplate>
    <template v-slot:title>History{{ search }}</template>
    <template v-slot:search>
      <label for="cari" class="form-label">Search by Date:</label>
      <input
        type="date"
        v-model="search"
        @input="getByDate"
        class="form-control-sm mb-2"
        name="cari"
        id="cari"
      />
      <button
        class="btn btn-primary mb-2"
        @click="
          search = '';
          checkSearch();
        "
      >
        clear
      </button>
    </template>
    <template v-slot:table>
      <table id="" class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in result" :key="res.id">
            <td>
              {{ res.tanggal }}
            </td>
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
                @click="editConfirm(res.id_absensi, res)"
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
          this.$router.go(0);
        } else {
          this.$router.go(0);
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
        const res = await AttendanceServices.getAttendanceById(
          this.$route.params.id
        );

        this.result = res.data;

        console.log(this.result);
        for (let item of this.result) {
          item.tanggal = this.dateFormat(item.tanggal);
        }
      } catch (err) {
        console.log(err);
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
    getByDate() {
      if (this.result) {
        var newArray = this.result;
        newArray = newArray.filter((a) => {
          return a.tanggal.match(this.search);
        });
        this.result = newArray;
      } else {
        this.getAllData();
      }
    },
  },
  computed: {},
  mounted() {
    this.getAllData();
  },
};
</script>

<style></style>
