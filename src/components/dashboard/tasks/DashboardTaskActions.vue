<template>
  <div class="dashboard-task-actions">
    <button class="dashboard-task-actions__button" type="button">
      <i class="dashboard-task-actions__status-ico dashboard-task-actions__status-ico--active"></i>
    </button>

    <button class="dashboard-task-actions__button" type="button">
      <i class="dashboard-task-actions__status-ico"></i>
    </button>

    <button class="dashboard-task-actions__button" type="button">
      <svg class="dashboard-task-actions__button-ico">
        <use href="#dashboard-edit"></use>
      </svg>
    </button>

    <button class="dashboard-task-actions__button" type="button">
      <svg class="dashboard-task-actions__button-ico">
        <use href="#dashboard-delete"></use>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'DashboardTaskActions'
  }
</script>

<style scoped>
  .dashboard-task-actions {
    display: flex;
    align-items: center;
  }
  .dashboard-task-actions__button {
    margin-left: 8px;
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .dashboard-task-actions__button-ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 16px;
    height: 16px;
    fill: #C2CFE0;
  }

  .dashboard-task-actions__status-ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 12px;
    height: 12px;
    background-color: #FFFFFF;
    border: 2px solid #2ED47A;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .dashboard-task-actions__status-ico--active {
    border-color: #FFB946;
  }
</style>
