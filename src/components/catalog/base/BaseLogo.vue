<template>
  <div class="logo">
    <img class="logo__img" src="/catalog-logo.svg" alt="catalog-logo">
    <img class="logo__img logo__img--light" src="/catalog-logo-light.svg" alt="catalog-logo">
    CONQUEST
  </div>
</template>
<script>
  export default {
    name: 'BaseLogo'
  }
</script>
<style scoped>
  .logo {
    display: flex;
    align-items: center;
    font-family: var(--font-catalog-secondary);
    font-size: 0.75rem;
    color: #555248;
    letter-spacing: 0.14em;
  }

  .logo__light {
    color: #FFFFFF;

    .logo__img {
      display: none;
    }

    .logo__img--light {
      display: block;
    }
  }

  .logo__img {
    margin-right: 3px;
    width: 19px;
    height: 19px;
  }

  .logo__img--light {
    display: none;
    width: 25px;
    height: 25px;
  }
</style>
