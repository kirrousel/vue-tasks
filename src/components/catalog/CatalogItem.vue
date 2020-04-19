<template>
  <div class="catalog-item">
    <a class="catalog-item__link" href="#">
      <img class="catalog-item__img" :src="'/img/watches/watch_' + img + '.png'" alt="watch">
      <div class="catalog-item__header">
        <p class="catalog-item__title">techne</p>
        <p class="catalog-item__price">{{ price }} ₽</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'CatalogItem',
    props: {
      img: { type: String, required: true },
      price: { type: String, required: true },
    },


  }
</script>

<style scoped>
  .catalog-item {
    width: 100%;
    min-height: 300px;
    background: linear-gradient(0deg, #FDFDFB, #FDFDFB);
  }

  .catalog-item__link {
    position: relative;
    display: block;
    height: 100%;
    font-family: var(--font-catalog-primary);
    font-size: 0.875rem;
  }

  .catalog-item__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .catalog-item__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 20px;
    box-sizing: border-box;
  }

  .catalog-item__title {
    margin-bottom: 9px;
    font-weight: bold;
    color: #444240;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .catalog-item__price {
    color: #636261;
  }

</style>
