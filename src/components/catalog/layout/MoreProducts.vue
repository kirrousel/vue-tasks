<template>
  <div class="more-products">
    <div class="more-products__wrapper wrapper wrapper--catalog">
      <div class="more-products__header">
        <h3 class="more-products__title">Ремешки</h3>
        <a class="more-products__link" href="#"> Смотреть все</a>
      </div>
      <div class="more-products__slider">
        <div class="more-products__actions">
          <button type="button" class="more-products__button" @click="showPrev">
            <svg class="more-products__button-ico">
              <use href="#catalog-chevron-left"></use>
            </svg>
          </button>
          <button type="button" class="more-products__button more-products__button--next" @click="showNext">
            <svg class="more-products__button-ico">
              <use href="#catalog-chevron-right"></use>
            </svg>
          </button>
        </div>

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
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
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
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    @media (--viewport-tablet) {
      margin-bottom: 52px;
    }
  }

  .more-products__title {
    padding-bottom: 5px;
    flex-grow: 1;
    font-size: 2rem;
    color: #1B1A17;
    font-family: var(--font-catalog-secondary);
  }

  .more-products__link {
    padding-bottom: 5px;
    border-bottom: 1px solid #C4C0B6;
    font-family: var(--font-catalog-primary);
    color: #444240;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    box-sizing: border-box;

    &:hover {
      opacity: .7;
    }
  }

  .more-products__slider {
    position: relative;

    @media (--viewport-tablet) {
      margin: 0 -20px;
    }
  }

  .more-products__item {
    display: inline-block;
    height: 100%;
    box-sizing: border-box;

    @media (--viewport-tablet) {
      padding: 0 20px;
    }
  }

  .more-products__actions {
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;

    @media (--viewport-tablet) {
      padding: 0 20px;
    }

    @media (--viewport-big-desktop) {
      padding: 0;
      margin: 0;
    }
  }

  .more-products__button {
    position: relative;
    width: 32px;
    height: 32px;
    border: 1px solid #C4C0B6;

    @media (--viewport-big-desktop) {
      left: -23px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 23px;
      height: 23px;
      border: none;
    }
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
    margin-left: 32px;
    @media (--viewport-big-desktop) {
      margin-left: 0;
      left: 100%;
    }
  }



</style>
