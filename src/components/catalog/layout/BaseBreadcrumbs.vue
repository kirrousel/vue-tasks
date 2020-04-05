<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__wrapper wrapper wrapper--catalog">
      <div class="breadcrumbs__list">
        <a class="breadcrumbs__link" href="#">Главная</a>
        <a class="breadcrumbs__link" href="#">Каталог</a>
        <span class="breadcrumbs__link breadcrumbs__link--current">Мужские часы</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .breadcrumbs {
    padding-top: 29px;
  }
  .breadcrumbs__list {

  }

  .breadcrumbs__link {
    position: relative;
    margin-right: 31px;
    font-size: 0.875rem;
    line-height: 1.14;
    color: #B3B3B3;
    font-family: var(--font-catalog-primary);

    +.breadcrumbs__link {
      &:after {
        content: '';
        border-style: solid;
        border-width: 1px 1px 0 0;
        border-color: #BDB9B5;
        display: inline-block;
        height: 5px;
        width: 5px;
        left: -19px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        transform-origin: center;
      }
    }
  }

  .breadcrumbs__link--current {
    font-weight: 500;
    color: #555248;
  }
</style>
