<template>
  <div class="catalog-pagination">
    <button class="catalog-pagination__button">
      <svg class="catalog-pagination__ico">
        <use href="#catalog-chevron-left"></use>
      </svg>
    </button>

    <button class="catalog-pagination__button"> 1 </button>
    <button class="catalog-pagination__button"> 2 </button>
    <button class="catalog-pagination__button catalog-pagination__button--active"> 3 </button>
    <button class="catalog-pagination__button"> ... </button>
    <button class="catalog-pagination__button"> 12 </button>

    <button class="catalog-pagination__button">
      <svg class="catalog-pagination__ico">
        <use href="#catalog-chevron-right"></use>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'CatalogPagination'
  }
</script>


<style>
  .catalog-pagination {
    display: flex;
    justify-content: flex-end;
  }

  .catalog-pagination__button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    font-size: .75rem;
    color: #B6B6B6;
  }

  .catalog-pagination__button--active {
    pointer-events: none;
    color: #1B1A17;
  }

  .catalog-pagination__ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    height: 10px;
    width: 8px;
  }

</style>
