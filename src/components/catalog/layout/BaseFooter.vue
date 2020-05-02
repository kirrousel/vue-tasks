<template>
  <div class="footer">
    <div class="footer__wrapper wrapper wrapper--catalog">
      <div class="footer__content">
        <div class="footer__box footer__box--main">
          <div class="footer__item footer__item--logo">
            <BaseLogo class="logo__light"/>
          </div>
          <div class="footer__item">
            <a class="footer__link" href="tel:+80631112233">8 (499) 450-47-97</a>
          </div>

          <div class="footer__item">
            <a class="footer__link" href="mailto:mail@mail.com">info@conquest.watch.ru</a>
          </div>
        </div>
        <div class="footer__box">
          <BaseFooterInfo
            :info="companyInfo"
          />
        </div>
        <div class="footer__box">
          <BaseFooterInfo
            :info="customersInfo"
          />
        </div>
        <div class="footer__box">
          <BaseFooterInfo
            :info="paymentInfo"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import BaseLogo from "@/components/catalog/base/BaseLogo.vue";
  import BaseFooterInfo from "@/components/catalog/layout/BaseFooterInfo.vue";

  export default {
    components: { BaseLogo, BaseFooterInfo },
    data() {
      return {
        companyInfo: {
          title: 'о компании',
          list: [
            {title: 'Наши магазины', link: '/shops'},
            {title: 'Вакансии', link: '/vacancies'},
            {title: 'Сертификаты', link: '/certificates'},
            {title: 'Отзывы', link: '/feedback'},
          ],
        },
        customersInfo: {
          title: 'покупателям',
          list: [
            {title: 'Каталог товаров', link: '/catalog'},
            {title: 'Как заказать?', link: '/order'},
            {title: 'FAQ', link: '/faq'},
            {title: 'Корпоративным клиентам', link: '/corporate-clients'},
          ],
        },
        paymentInfo: {
          title: 'оплата и доставка',
          list: [
            {title: 'Способы оплаты', link: '/payments'},
            {title: 'Время доставки', link: '/delivery'},
            {title: 'Гарантии и ремонт', link: '/repair'},
            {title: 'Возврат и компенсация', link: '/returns'},
          ],
        },
      };
    },
  }
</script>

<style scoped>
  .footer {
    padding: 67px 0;
    background-color: #444240;
    color: rgba(255, 255, 255, 0.75);
  }

  .footer__content {
    display: flex;
    margin: 0 -8px;
  }

  .footer__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
    width: 25%;
    box-sizing: border-box;
  }

  .footer__box--main {
    align-items: flex-start;
  }

  .footer__item {
    margin-bottom: 15px;
  }

  .footer__item--logo {
    margin-bottom: 23px;
  }

  .footer__link {
    font-family: var(--font-catalog-primary);
    font-size: 0.75rem;
    line-height: 1.16;
    color: rgba(255, 255, 255, 0.75);
  }
</style>
