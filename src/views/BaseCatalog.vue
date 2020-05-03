<template>
  <div class="catalog">
    <div class="catalog__wrapper wrapper wrapper--catalog">
      <div class="catalog__header">
        <CatalogHeader/>
      </div>
      <div class="catalog__content">
        <div class="catalog__box catalog__box--filters">
          <div class="catalog__filter">
            <CatalogFilters :brands="brands" :colors="colors" :materials="materials" :mechanisms="mechanisms"/>
          </div>
        </div>
        <div class="catalog__box catalog__box--list">
          <div class="catalog__list">
            <CatalogList :items-first-chunk="itemsFirstChunk" :items-second-chunk="itemsSecondChunk"/>
          </div>
          <CatalogPagination/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CatalogHeader from '@/components/catalog/layout/CatalogHeader.vue';
  import CatalogFilters from '@/components/catalog/filters/CatalogFilters.vue';
  import CatalogList from '@/components/catalog/list/CatalogList.vue';
  import CatalogPagination from '@/components/catalog/CatalogPagination.vue';

  export default {
    components: {CatalogPagination, CatalogList, CatalogFilters, CatalogHeader},
    data() {
      return  {
        brands: [
          {value: 'Techne'},
          {value: 'Rado'},
          {value: 'Bvlgari'},
          {value: 'Tissot'},
          {value: 'Omega'},
          {value: 'Montblanc'},
        ],
        mechanisms: [
          {value: 'Механические'},
          {value: 'Ручной завод'},
          {value: 'Автоматический завод'},
          {value: 'С автоматическим и ручным заводом'},
          {value: 'Кварцевые'},
          {value: 'Солнечная батарея'},
          {value: 'Автокварцевые'}
        ],
        materials: [
          {value: 'Сталь'},
          {value: 'Сталь с PVD покрытием'},
          {value: 'Сталь/керамика'},
          {value: 'Сталь/золото'},
          {value: 'Сталь/кожа'},
          {value: 'Кожа'},
          {value: 'Каучук'},
          {value: 'Титан'},
          {value: 'Нейлон'},
          {value: 'Полимер'},
          {value: 'Керамика'},
          {value: 'Латунь'},
        ],
        colors: [
          {value: 'Золотой'},
          {value: 'Черный'},
          {value: 'Комбинированный (сталь/золото)'},
          {value: 'Белый'},
          {value: 'Синий'},
          {value: 'Зеленый'},
          {value: 'Хаки'},
          {value: 'Серый'},
          {value: 'Коричневый'},
          {value: 'Прозрачный'},
          {value: 'Фиолетовый'},
          {value: 'Красный'},
          {value: 'Розовый'},
        ],
        itemsFirstChunk: [
          {img: '1', price: '12 700'},
          {img: '2', price: '12 700'},
          {img: '3', price: '15 700'},
          {img: '4', price: '16 000'},
          {img: '5', price: '17 777'},
        ],
        itemsSecondChunk: [
          {img: '6', price: '25 999'},
          {img: '7', price: '100 000'},
          {img: '8', price: '100 099'},
          {img: '9', price: '101 101'},
          {img: '10', price: '199 999'},
          {img: '11', price: '399 099'},
        ],

      };
    }
  }
</script>

<style scoped>
  .catalog {
    padding-top: 16px;
    padding-bottom: 32px;

    @media (--viewport-tablet) {
      padding-top: 40px;
      padding-bottom: 78px;
    }
  }

  .catalog__content {
    @media(--viewport-tablet) {
      display: flex;
      margin: 0 -10px;
    }
  }

  .catalog__header {
    margin-bottom: 24px;

    @media (--viewport-tablet) {
      margin-bottom: 40px;
    }
  }

  .catalog__box {
    box-sizing: border-box;

    @media(--viewport-tablet) {
      padding: 0 10px;
    }
  }

  .catalog__box--filters {
    display: none;

    @media(--viewport-desktop) {
      display: block;
      flex: 323px 0 0;
    }
  }

  .catalog__box--list {
    flex-grow: 1;
  }

  .catalog__filter {
    max-width: 230px;
  }

  .catalog__list {
    margin-bottom: 40px;
  }

</style>
