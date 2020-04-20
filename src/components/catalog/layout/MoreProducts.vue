<template>
  <div class="more-products">
    <div class="more-products__wrapper wrapper wrapper--catalog">
      <div class="more-products__header">
        <h3 class="more-products__title">Ремешки</h3>
      </div>
      <div class="more-products__slider">
        <button type="button" class="more-products__button" @click="showPrev">
          <svg class="more-products__button-ico">
            <use href="#catalog-chevron-left"></use>
          </svg>
        </button>

        <VueSlickCarousel v-bind="settings" ref="carousel">

          <div class="more-products__item" v-for="(item, index) in moreItemList" :key="index">
            <CatalogListItem
              class="catalog-list-item--more"
              :title="item.title"
              :img="item.img"
              :price="item.price"
            />
          </div>

        </VueSlickCarousel>
        <button type="button" class="more-products__button more-products__button--next" @click="showNext">
          <svg class="more-products__button-ico">
            <use href="#catalog-chevron-right"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import CatalogListItem from "../list/CatalogListItem";
  export default {
    components: {CatalogListItem, VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
        moreItemList: [
          {img: 'more_1', price: '6 500', title: 'GEORG JENSEN'},
          {img: 'more_2', price: '3 200', title: 'nato'},
          {img: 'more_3', price: '5 400', title: 'SPARK'},
          {img: 'more_1', price: '6 500', title: 'GEORG JENSEN'},
          {img: 'more_2', price: '3 200', title: 'nato'},
          {img: 'more_3', price: '5 400', title: 'SPARK'},

        ],
      }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
      showPrev() {
        this.$refs.carousel.prev()
      }
    },

  }
</script>

<style scoped>
  .more-products {
    padding: 80px 0;
  }
  .more-products__header {
    margin-bottom: 57px;
  }
  .more-products__slider {
    position: relative;
    margin: 0 -20px;
  }

  .more-products__item {
    padding: 0 20px;
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
  }

  .more-products__button {
    position: absolute;
    top: 50%;
    left: -23px;
    transform: translateY(-50%);
    width: 23px;
    height: 23px;
  }

  .more-products__button-ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    height: 23px;
    width: 12px;
    fill: #1B1A17;
  }

  .more-products__button--next {
    left: 100%;
  }

</style>
