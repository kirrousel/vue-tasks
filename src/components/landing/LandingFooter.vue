<template>
  <div class="footer">
    <div class="footer__wrapper wrapper">
      <div class="footer__content">
        <div class="footer__box">
          <div class="footer__logo">
            <img class="footer__img" src="/logo-light.svg" alt="logo">
            Afrianska
          </div>
          <ul class="footer__contacts footer-contacts">
            <li v-for="contact in contacts" class="footer-contacts__item">
              <span class="footer-contacts__title">{{ contact.title }}</span>
              <a class="footer-contacts__link" :href="contact.link" target="_blank">{{ contact.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__box">
          <ul class="footer__list">
            <p class="footer__title">About us</p>
            <li v-for="link in footerAboutLinks" class="footer__item">
              <a class="footer__link" href="#">{{ link.title }}</a>
            </li>
          </ul>

          <ul class="footer__list">
            <p class="footer__title">Follow us</p>
            <li v-for="link in footerFollowLinks" class="footer__item">
              <a class="footer__link" href="#">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="footer__copyright">2019 © Afrianska. All rights reserved.</p>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        contacts: [
          {title: 'A.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', link: 'https://goo.gl/maps/C6Wr5wjnk4PajQFw5'},
          {title: 'T.', text: '+62-812-7313-4321', link: 'tel:+6281273134321'},
          {title: 'E.', text: 'hello.afrian@gmail.com', link: 'mailto:hello.afrian@gmail.com'},
        ],
        footerAboutLinks: [
          {title: 'About'},
          {title: 'What We Do'},
          {title: 'Project'},
          {title: 'How It Work With Us'},
        ],
        footerFollowLinks: [
          {title: 'Instagram'},
          {title: 'Facebook'},
          {title: 'LinkedIn'},
          {title: 'YouTube'},
        ],
      }
    }

  }
</script>

<style scoped>

  .footer__content {
    @media (--viewport-tablet) {
      display: flex;
      margin: 0 -20px 64px;
    }

    @media (--viewport-desktop) {
      display: flex;
      margin: 0 -50px 64px;
    }
  }
  .footer__box {
    margin-bottom: 40px;
    box-sizing: border-box;

    @media (--viewport-tablet) {
      padding: 0 20px;
      width: 50%;
    }

    @media (--viewport-desktop) {
      padding: 0 50px;
    }
  }

  .footer__logo {
    margin-bottom: 20px;
    display: flex;
    font-size: 1.75rem;
    color: var(--color-white);
    line-height: 48px;

    @media (--viewport-tablet) {
      margin-bottom: 33px;
    }
  }

  .footer__img {
    margin-right: 16px;
    width: 48px;
    height: 48px;
  }

  .footer__contacts {}
  .footer-contacts {}
  .footer-contacts__item {
    position: relative;
    padding-left: 35px;
    color: var(--color-white);
    box-sizing: border-box;

    &:not(:last-child){
      margin-bottom: 24px;
    }
  }
  .footer-contacts__title {
    position: absolute;
    left: 0;
    top: 0;
    font-weight: bold;

  }
  .footer-contacts__link {
    color: var(--color-white);
    transition: .3s ease;
    &:hover {
      opacity: .7;
    }
  }

  .footer__list {
    display: inline-block;
    width: 50%;
    color: var(--color-white);
  }

  .footer__title {
    margin-bottom: 16px;
    font-size: 1rem;
    font-weight: bold;

    @media (--viewport-tablet) {
      margin-bottom: 24px;
      font-size: 1.25rem;
    }
  }

  .footer__item {
    padding: 4px 0;
    @media (--viewport-tablet) {
      padding: 8px 0;
    }
  }

  .footer__link {
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--color-white);
    transition: .3s ease;

    @media (--viewport-tablet) {
      font-size: 1rem;
    }

    &:hover {
      opacity: .7;
    }
  }

  .footer__copyright {
    font-size: 0.875rem;
    color: var(--color-white);
    opacity: 0.4;

    @media (--viewport-tablet) {
      font-size: 1rem;
    }
  }
</style>
