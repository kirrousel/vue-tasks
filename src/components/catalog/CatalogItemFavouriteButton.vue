<template>
  <button class="catalog-item-favourite-button"
          type="button"
          :class="{'catalog-item-favourite-button--active': isFavourite}"
          @click="toggleFavourite"
  >
    <svg class="catalog-item-favourite-button__ico">
      <use href="#catalog-favourite"></use>
    </svg>

    <svg class="catalog-item-favourite-button__ico catalog-item-favourite-button__ico--filled">
      <use href="#catalog-favourite-filled"></use>
    </svg>
  </button>
</template>
<style scoped>

  .catalog-item-favourite-button {
    position: relative;
    width: 26px;
    height: 26px;
  }

  .catalog-item-favourite-button--active {
    .catalog-item-favourite-button__ico {
      display: none;
    }

    .catalog-item-favourite-button__ico--filled {
      display: block;
    }
  }

  .catalog-item-favourite-button__ico {
    position: absolute;
    width: 18px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .catalog-item-favourite-button__ico--filled {
    display: none;
    fill: #D75A4A;
  }
</style>
<script>
  export default {
    name: 'CatalogItemFavouriteButton',
    data() {
      return {
        isFavourite: false,
      }
    },
    methods: {
      toggleFavourite() {
        this.isFavourite = !this.isFavourite;
      }
    }

  }
</script>
