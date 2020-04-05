<template>
  <label class="sorting">
    <span class="sorting__text">Сортировать по:</span>
    <select class="sorting__select">
      <option class="sorting__option" selected>популярности</option>
      <option class="sorting__option">цене</option>
      <option class="sorting__option">отзывам</option>
    </select>
  </label>
</template>

<script>
  export default {
    name: 'BaseSorting'
  }
</script>

<style scoped>
  .sorting {
    position: relative;
    padding-right: 19px;
    box-sizing: border-box;

    &:after {
      content: '';
      border-style: solid;
      border-width: 1px 1px 0 0;
      border-color: #1B1A17;
      display: inline-block;
      height: 5px;
      width: 5px;
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(135deg);
      transform-origin: center;
    }
  }

  .sorting__text {
    margin-right: 5px;
    font-size: 0.875rem;
    color: #BDB9B5;

  }

  .sorting__select {
    border: 0;
    background-color: transparent;
    -webkit-appearance: none;
    outline: none;
    font-size: 0.875rem;
    color: #1B1A17;
    cursor: pointer;
  }

</style>
