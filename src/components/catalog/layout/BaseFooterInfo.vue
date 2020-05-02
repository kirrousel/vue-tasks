<template>
  <div class="footer-info">
    <p class="footer-info__title"> {{ info.title }}</p>
    <ul class="footer-info__list">
      <li class="footer-info__item" v-for="item in info.list">
        <a class="footer-info__link" :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    name: 'BaseFooterList',
    props: {
      info: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .footer-info {
    font-family: var(--font-catalog-primary);
  }
  .footer-info__title {
    margin-bottom: 33px;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: #FFFFFF;
    font-weight: bold;
    line-height: 1.14;
    letter-spacing: 0.07em;
  }

  .footer-info__item {
    margin-bottom: 15px;
  }

  .footer-info__link {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.16;

    &:hover {
      color: rgba(255, 255, 255,1);
    }
  }
</style>
