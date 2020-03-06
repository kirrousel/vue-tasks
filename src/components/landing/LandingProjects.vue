<template>
  <div class="projects">
    <div class="projects__wrapper wrapper">
      <LandingSectionHeader/>
      <ul class="projects__list">
        <li
          v-for="project in projects"
          class="projects__item"
          :class="project.class"
        >
          <router-link to="#" class="projects__link" >
            <div class="projects__img-wrapper">
              <img
                class="projects__img"
                :src="'/img/project-' + project.img + '.png'"
                :alt="project.name">
              <i class="projects__overlay"></i>
            </div>

            <div class="projects__content">
              <p class="projects__name"> {{ project.name }} </p>
              <p class="projects__description"> {{ project.description }} </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import LandingSectionHeader from "./LandingSectionHeader";

  export default {
    components: {LandingSectionHeader},
    data() {
      return {
        projects: [
          {
            name: 'Smart Home Installation',
            description: 'In Muarakana Housing Estate',
            img: 'home',
            class: 'projects__item--full'
          },
          {
            name: 'Sparklite App',
            description: 'Marketplace',
            img: 'app',
            class: ''
          },
          {
            name: 'Car-Rapetition App',
            description: 'Board',
            img: 'car',
            class: ''
          },
        ]
      }
    }

  }
</script>

<style scoped>

  .projects__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }

  .projects__item {
    width: 100%;
    max-width: 422px;
    height: 417px;
    background: #E8E8E8;
    border-radius: 10px;
    overflow: hidden;
  }

  .projects__item--full {
    margin-bottom: 96px;
    max-width: 100%;

    .projects__content {
      top: 48px;
      right: 48px;
      left: auto;
      text-align: right;
    }
  }

  .projects__link {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .projects__img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .projects__img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .projects__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(89.97deg, #1F3F68 3.62%, rgba(31, 63, 104, 0.37) 97.78%);
  }

  .projects__content {
    position: absolute;
    top: 24px;
    left: 32px;
    color: var(--color-white);
  }

  .projects__name {
    margin-bottom: 8px;
    font-size: 1.75rem;
    line-height: 1.6;
  }

  .projects__description {
    font-size: 1rem;
    line-height: 2.875;

  }

</style>
