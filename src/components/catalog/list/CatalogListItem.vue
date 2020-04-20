<template>
  <div class="catalog-list-item">
    <div class="catalog-list-item__header">
      <div class="catalog-list-item__box catalog-list-item__box--title">
        <p class="catalog-list-item__title">{{ title }}</p>
        <p class="catalog-list-item__price">{{ price }} ₽</p>
      </div>

      <div class="catalog-list-item__box catalog-list-item__box--actions">
        <CatalogItemFavouriteButton/>

        <button class="catalog-list-item__button" type="button">
          <svg class="catalog-list-item__button-ico">
            <use href="#catalog-cart"></use>
          </svg>
        </button>
      </div>

    </div>
    <a class="catalog-list-item__link" href="#">
      <img class="catalog-list-item__img" :src="'/img/watches/watch_' + img + '.png'" alt="watch">
    </a>
  </div>
</template>

<script>
  import CatalogItemFavouriteButton from "../CatalogItemFavouriteButton";

  export default {
    name: 'CatalogListItem',
    components: {CatalogItemFavouriteButton},
    props: {
      img: { type: String, required: true },
      price: { type: String, required: true },
      title: {type: String, default: 'techne'}
    },


  }
</script>

<style scoped>
  .catalog-list-item {
    position: relative;
    width: 100%;

    background: linear-gradient(0deg, #FDFDFB, #FDFDFB);
  }

  .catalog-list-item--more {
    .catalog-list-item__link {
      min-height: 360px;
    }
  }

  .catalog-list-item__link {
    position: relative;
    display: block;
    height: 100%;
    min-height: 300px;
    font-family: var(--font-catalog-primary);
    font-size: 0.875rem;
  }

  .catalog-list-item__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
  }

  .catalog-list-item__header {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    padding: 20px;
    box-sizing: border-box;
  }

  .catalog-list-item__title {
    margin-bottom: 9px;
    font-weight: bold;
    color: #444240;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .catalog-list-item__price {
    color: #636261;
  }

  .catalog-list-item__box {

  }

  .catalog-list-item__box--title {
    flex: 1;
  }

  .catalog-list-item__button {
    margin-left: 8px;
    position: relative;
    width: 26px;
    height: 26px;

  }
  .catalog-list-item__button-ico {
    position: absolute;
    width: 18px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
