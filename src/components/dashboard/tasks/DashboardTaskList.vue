<template>
  <div class="task-list">
    <div
      class="task-list__item"
      v-for="(item, index) in tasks"
      :key="index"
    >
      <DashboardTask :task="item"/>
    </div>
  </div>
</template>

<script>
  import DashboardTask from './DashboardTask.vue';

  export default {
    components: { DashboardTask },
    data() {
      return {
        tasks: [
          {
            title: ' Send benefit review by Sunday',
            type: 'Reminder',
            date: 'December 23, 2020',
            photo: 'https://picsum.photos/100?random=1',
            name: 'George Fields',
            status: 'Completed'
          },
          {
            title: 'Invite to office meet-up',
            type: 'Call',
            date: 'December 22, 2020',
            photo: 'https://picsum.photos/100?random=2',
            name: 'Rebecca Moore',
            status: 'Ended'
          },
          {
            title: 'Office meet-up',
            type: 'Event',
            date: 'December 21, 2020',
            photo: 'https://picsum.photos/100?random=3',
            name: 'Lindsey Stroud',
            status: 'Completed'
          },
        ]
      }
    }
  }
</script>

<style scoped>

  .task-list {
    padding-top: 6px;
  }

  .task-list__item {
    padding: 6px 24px;
  }

</style>
