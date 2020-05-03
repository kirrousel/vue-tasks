<template>
  <label class="sorting">
    <span class="sorting__text">Сортировать:</span>
    <select class="sorting__select">
      <option class="sorting__option" selected>По популярности</option>
      <option class="sorting__option">По цене</option>
      <option class="sorting__option">По отзывам</option>
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
    display: flex;
    align-items: center;
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
      top: 4px;
      position: absolute;
      transform: rotate(135deg);
      transform-origin: center;
    }
  }

  .sorting__text {
    display: none;
    margin-right: 5px;
    font-size: 0.875rem;
    color: #BDB9B5;

    @media (--viewport-tablet) {
      display: inline-block;
    }

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
