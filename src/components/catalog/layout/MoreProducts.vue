<template>
  <div class="more-products">
    <div class="more-products__wrapper wrapper wrapper--catalog">
      <div class="more-products__header">
        <h3 class="more-products__title">Ремешки</h3>
      </div>
      <div class="more-products__slider">
        <VueSlickCarousel  v-bind="settings">
          <div class="more-products__item">1</div>
          <div class="more-products__item">2</div>
          <div class="more-products__item">3</div>
          <div class="more-products__item">4</div>
          <div class="more-products__item">5</div>
          <div class="more-products__item">6</div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  export default {
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      }
    }

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
  }

  .more-products__item {
    display: inline-block;
    height: 100%;
  }

</style>
