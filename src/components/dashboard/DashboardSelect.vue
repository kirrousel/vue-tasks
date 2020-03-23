<template>
  <label class="select">
    <span class="select__title">Show: </span>
    <select class="select__value" name="sorting" id="sortingSelect">
      <option>This week</option>
      <option>This month</option>
      <option>Last week</option>
      <option>Last month</option>
    </select>
  </label>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .select {
    position: relative;
    font-size: 0.75rem;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-top: 3px solid #AEAEAE;
    }
  }
  .select__value {
    padding-right: 9px;
    color: #109CF1;
    outline: none;
    background: none;
    border: 0;
    -webkit-appearance: none;
    cursor: pointer;
    box-sizing: border-box;
  }

  .select__title {
    color: #6A707E
  }
</style>
