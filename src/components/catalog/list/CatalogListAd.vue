<template>
  <a class="catalog-list-ad">
    <img class="catalog-list-ad__img" src="/img/watches/watch-ad.png" alt="watch ad">
    <div class="catalog-list-ad__content">
      <p class="catalog-list-ad__text catalog-list-ad__text--number">-20%</p>
      <p class="catalog-list-ad__text">НА ВТОРУЮ ПОЗИЦИЮ В ЧЕКЕ</p>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'CatalogListAd',

  }
</script>

<style scoped>
  .catalog-list-ad {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 38px;
    width: 100%;
    background: #D4B098;
    box-sizing: border-box;
  }

  .catalog-list-ad__text {
    max-width: 200px;
    font-family: var(--font-catalog-secondary);
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    text-transform: uppercase;

    @media (--viewport-tablet) {
      max-width: 112px;
      font-size: 1rem;
    }
  }

  .catalog-list-ad__text--number {
    margin-bottom: 5px;
    font-size: 2.8125rem;
  }

  .catalog-list-ad__img {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    right: 0;
  }
</style>
