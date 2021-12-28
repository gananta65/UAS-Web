<template>
  <div class="mt-3">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title"><slot name="title"></slot></h3>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <div class="row">
          <div class="col d-flex justify-content-start">
            <slot name="button-add"></slot>
          </div>
          <div class="col d-flex justify-content-end gap-3">
            <slot name="search"></slot>
          </div>
        </div>
        <slot name="table"></slot>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
