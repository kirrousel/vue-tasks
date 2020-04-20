<template>
  <div class="subscription">
    <i class="subscription__circle"></i>
    <i class="subscription__circle-small"></i>
    <i class="subscription__circle-small subscription__circle-small--bottom"></i>
    <div class="subscription__wrapper wrapper wrapper--catalog">
      <div class="subscription__content">
        <div class="subscription__box">
          <h2 class="subscription__title">подписка на рассылку</h2>
          <p class="subscription__text">Получить скидку 10% на первую покупку</p>
        </div>

        <div class="subscription__box subscription__box--form">
          <form class="subscription__form">
            <BaseInput type="email" label="Email"/>
            <button class="subscription__button catalog-button catalog-button--filled" type="submit">подписаться</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BaseInput from '@/components/catalog/base/BaseInput.vue';

  export default {
    components: {BaseInput}
  }
</script>

<style scoped>
  .subscription {
    position: relative;
    display: flex;
    align-items: center;
    background-color: rgba(234, 228, 213, 0.38);
    min-height: 293px;
    overflow: hidden;
  }

  .subscription__circle {
    position: absolute;
    top: -173%;
    left: -30%;
    height: 792px;
    width: 792px;
    background: rgba(212, 176, 152, 0.48);
    border-radius: 100%;
  }

  .subscription__circle-small {
    position: absolute;
    top: -80%;
    right: -2%;
    width: 365px;
    height: 365px;
    border-radius: 100%;
    border: 1px solid #D8B8A2;
  }

  .subscription__circle-small--bottom {
    top: 50%;
    right: -17%;
  }

  .subscription__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 -10px;
    z-index: 1;
  }

  .subscription__box {
    position: relative;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .subscription__box--form {
    display: flex;
    align-items: flex-end;
  }

  .subscription__title {
    margin-bottom: 15px;
    font-family: var(--font-catalog-primary);
    color: #818181;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .subscription__text {
    max-width: 505px;
    font-weight: 600;
    font-family: var(--font-catalog-secondary);
    font-size: 2.8125rem;
    line-height: 1.33;
    letter-spacing: 0.03em;
  }

  .subscription__form {
    display: flex;
    align-items: flex-end;
  }

  .subscription__button {
    margin-left: 33px;
  }
</style>
