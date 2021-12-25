<template>
  <form :action="action" :method="method">
  <slot></slot>
</form>
</template>

<script>
export default {
    props:['action','method']
}
</script>

<style>

</style>