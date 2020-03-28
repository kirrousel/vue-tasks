<template>
  <div class="status-bar">
    <span class="status-bar__progress"></span>
    <span class="status-bar__progress status-bar__progress--filled" style="width: 60%"></span>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .status-bar {
    position: relative;
    width: 100%;
    height: 4px;
  }

  .status-bar__progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #EBEFF2;
    border-radius: 3px;
  }

  .status-bar__progress--filled {
    background-color: #2ED47A;
  }

</style>
