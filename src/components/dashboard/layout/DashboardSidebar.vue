<template>
  <div class="sidebar" :class="{'sidebar--collapsed': isSidebarCollapsed}">
    <div class="sidebar__header">
      <p class="sidebar__title">Dashboard</p>
      <p class="sidebar__title sidebar__title--small">D</p>
    </div>
    <div class="sidebar__box sidebar__box--user">
        <DashboardUser
          :class="{'user--small': isSidebarCollapsed}"
        />
    </div>
    <div class="sidebar__box sidebar__box--primary">
      <div class="sidebar__nav">
        <DashboardNav
          :nav-items="sidebarNavItems"
          :class="{'nav--small': isSidebarCollapsed}"
        />
      </div>
    </div>
    <div class="sidebar__box sidebar__box--secondary">
      <div class="sidebar__nav">
        <DashboardNav
          :nav-items="sidebarNavSecondaryItems"
          :class="{'nav--small': isSidebarCollapsed}"
        />
      </div>
    </div>
    <div class="sidebar__box">
      <button
        type="button"
        class="sidebar__button"
        @click="collapseSidebar"
      >
        <svg class="sidebar__button-ico">
          <use href="#dashboard-sidebar"></use>
        </svg>
        <span class="sidebar__button-text">Toggle sidebar</span>
      </button>
    </div>
  </div>
</template>

<script>
  import DashboardUser from '../DashboardUser.vue';
  import DashboardNav from '../DashboardNav.vue';
  export default {
    components: {DashboardUser, DashboardNav},
    data() {
      return {
        isSidebarCollapsed: false,
        sidebarNavItems: [
          {
            link: '#',
            ico: 'main',
            text: 'Dashboard',
            isActive: true,
          },
          {
            link: '#',
            ico: 'tasks',
            text: 'Tasks',
          },
          {
            link: '#',
            ico: 'email',
            text: 'Email',
          },
          {
            link: '#',
            ico: 'contacts',
            text: 'Contacts',
          },
          {
            link: '#',
            ico: 'chat',
            text: 'Chats',
          },
          {
            link: '#',
            ico: 'deals',
            text: 'Deals',
          },
        ],
        sidebarNavSecondaryItems: [
          {
            link: '#',
            ico: 'settings',
            text: 'Settings',
          }
        ]
      }
    },
    methods: {
      collapseSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    flex-shrink: 0;
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
    flex-direction: column;
    top: 39px;
    width: 256px;
    background-color: var(--color-white);
    box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.06);
    animation: open .3s ease;
    z-index: 1;
    height: calc(100%);
    min-height: calc(100%);
    height: auto !important;
  }

  .sidebar--collapsed {
    width: 68px;
    animation: collapse .3s ease;

    .sidebar__title {
      display: none;
    }

    .sidebar__title--small {
      display: block;
    }

    .sidebar__box {
      padding-left: 11px;
      padding-right: 11px;
    }

    .sidebar__button {
      width: 100%;
    }

    .sidebar__button-ico {
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      fill: var(--dashboard-accent-blue);
    }

    .sidebar__button-text {
      display: none;
     }

    .sidebar__nav {
      margin: 0 -11px;
    }
  }

  .sidebar__header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 17px 24px;
    border-bottom: 1px solid #EBEFF2;
    box-sizing: border-box;
  }

  .sidebar__title {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--dashboard-accent-blue);
  }

  .sidebar__title--small {
    display: none;
  }

  .sidebar__box {
    padding: 24px;
  }

  .sidebar__box--user {
    padding-bottom: 6px;
  }

  .sidebar__box--primary {
    border-bottom: 1px solid #EBEFF2;
  }

  .sidebar__box--secondary {
    padding-top: 14px;
    flex-grow: 1;
  }

  .sidebar__nav {
    margin: 0 -24px;
  }

  .sidebar__button {
    position: relative;
    height: 20px;
    padding-left: 34px;
    font-weight: 500;
    font-size: 0.6875rem;
    line-height: 16px;
    color: var(--dashboard-grey);
    box-sizing: border-box;
  }

  .sidebar__button-ico {
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    fill: var(--dashboard-grey-icon);
  }

  @keyframes collapse {
    from {
      width: 256px;
    }
    to {
      width: 68px;
    }
  }

  @keyframes open {
    from {
      width: 68px;
    }
    to {
      width: 256px;
    }
  }

</style>
