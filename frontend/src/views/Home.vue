<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-6">
      <Card>
        <template v-slot:login>
          <h5 class="card-title">Scan/Input Your ID Card Code</h5>
          <form
            @submit.prevent="submitForm"
            class="form-group d-flex justify-content-center"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="id"
                name="id"
                required
              />
              <br />
              {{ id }}
              <input
                type="submit"
                class="form-control"
                @click="submitForm"
                name="submit"
              />
            </div>
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  components: { Card },
  data() {
    return {
      id: "",
      getResult: null,
      postResult: null,
      putResult: null,
      deleteResult: null,
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    submitForm() {
      axios
        .post("api/users", {
          id: this.id,
        })
        .then((response) => {
          console.log(response);
          console.log("berhasil dijalankan!");
        })
        .catch((error) => {
          console.log(error);
          console.log("gagal!");
        });
    },
    async getDataById() {
      const id = this.$refs.get_id.value;
      if (id) {
        try {
          const res = await http.get(`/${id}`);
          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };
          // const result = {
          //   data: res.data,
          //   status: res.status,
          //   statusText: res.statusText,
          //   headers: res.headers,
          //   config: res.config,
          // };
          this.getResult = this.fortmatResponse(result);
        } catch (err) {
          this.getResult = this.fortmatResponse(err.response?.data) || err;
        }
      }
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 15%;
}
</style>
