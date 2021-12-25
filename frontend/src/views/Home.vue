<template>
<div class="row d-flex justify-content-center">
  <div class="col-12 col-md-6">
    <Card>
      <template v-slot:login>
        <h5 class="card-title"><center>Scan/Input Your ID Card Code</center></h5>
        <formlogin :action="abc" :method="post" class="form-group d-flex justify-content-center">
          <div class="form-group">
            <input type="text" class="form-control" name="id" required>
            <br>
            <input type="submit" class="form-control" name="submit">
          </div>
        </formlogin>
      </template>
    </Card>
  </div>
</div>
</template>

<script>
import Card from '@/components/Card.vue'
import formlogin from '@/components/formlogin.vue'



export default {
components:  {Card, formlogin}
}
</script>

<style scoped>
.row {
  margin-top: 15%;
}
</style>