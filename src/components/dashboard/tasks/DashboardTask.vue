<template>
  <div class="dashboard-task">
    <div class="dashboard-task__content">
      <div class="dashboard-task__header">
        <p class="dashboard-task__title">{{ task.title }}</p>
        <p class="dashboard-task__type">{{ task.type }}</p>
      </div>

      <p class="dashboard-task__deadline">
        Due date:
        <span class="dashboard-task__date"> {{ task.date }} </span>
      </p>

      <div class="dashboard-task__actions">
        <div class="dashboard-task__item dashboard-task__item--assignee">
          <div class="dashboard-task__assignee">
            <img class="dashboard-task__photo" :src=task.photo alt="user">
            <span class="dashboard-task__name"> {{ task.name }} </span>
          </div>
        </div>
        <div class="dashboard-task__item dashboard-task__item--actions">
          <DashboardTaskActions/>
        </div>
        <div class="dashboard-task__item">
          <div
            class="dashboard-task__status"
            :class="{'dashboard-task__status--ended': task.status === 'Ended'}"
          >{{ task.status }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import DashboardTaskActions from "./DashboardTaskActions";

  export default {
    name: 'DashboardTask',
    components: {DashboardTaskActions},
    props: ['task']
  }
</script>


<style scoped>
  .dashboard-task {
    padding: 16px 10px;
    min-height: 120px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;

    @media (--viewport-tablet) {
      padding: 16px;
    }

    &:hover {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.14);

      .dashboard-task__item--actions {
        display: flex;
      }
    }

    .dashboard-task__header {
      display: flex;
      margin-bottom: 7px;
    }

    .dashboard-task__title {
      padding-right: 10px;
      flex-grow: 1;
      color: #192A3E;
      font-size: 0.8125rem;
      letter-spacing: 0.01em;
      line-height: 1.5;
      font-weight: 500;

      @media (--viewport-tablet) {
        font-size: 0.9375rem;
      }
    }

    .dashboard-task__type {
      font-size: 0.75rem;
      color: #90A0B7;
      font-weight: 500;
    }

    .dashboard-task__deadline {
      margin-bottom: 20px;
      font-size: 0.8125rem;
      color: rgba(76,88,98, .5)
    }

    .dashboard-task__date {
      color: #4C5862;
    }

    .dashboard-task__actions {
      display: flex;
      margin: 0 -6px;
    }

    .dashboard-task__item {
      padding: 0 6px;
      box-sizing: border-box;
    }

    .dashboard-task__item--assignee {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    .dashboard-task__item--actions {
      display: none;
    }

    .dashboard-task__assignee {
      display: flex;
      align-items: center;
    }

    .dashboard-task__photo {
      margin-right: 12px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }

    .dashboard-task__name {
      font-size: 0.8125rem;
      color: #707683;
    }

    .dashboard-task__status {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 84px;
      height: 24px;
      font-size: 0.6875rem;
      color: #FFFFFF;
      font-weight: 500;
      background: #2ED47A;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .dashboard-task__status--ended {
      background-color: #F7685B;
    }


  }

</style>
