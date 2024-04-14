// src/components/FrameworkComparison.vue

<template>
  <v-container>
    <v-data-table
      :headers="performanceHeaders"
      :items="performance"
      class="elevation-1 mt-5"
      :items-per-page="5"
      :footer-props="{
        'items-per-page-options': [5, 10, 15]
      }"
    />
  </v-container>
</template>

<script>
export default {
  data: () => ({
    performanceHeaders: [
      { title: 'Название', value: 'name' },
      { title: 'Нагрузка на процессор', value: 'cpuLoad' },
      { title: 'Нагрузка на графический процессор', value: 'gpuLoad' },
      { title: 'Объем занимаемой памяти', value: 'memoryUsage' },
      { title: 'Скорость загрузки приложения', value: 'loadSpeed' },
      { title: 'Энергопотребление приложения', value: 'energyConsumption' }
    ],
    performance: [
      {
        name: 'React Native',
        cpuLoad: 'Умеренная',
        gpuLoad: 'Умеренная',
        memoryUsage: 'Средний',
        loadSpeed: 'Быстрая',
        energyConsumption: 'Экономное'
      },
      {
        name: 'NativeScript',
        cpuLoad: 'Низкая',
        gpuLoad: 'Умеренная',
        memoryUsage: 'Низкий',
        loadSpeed: 'Очень быстрая',
        energyConsumption: 'Очень экономное'
      },
      {
        name: 'Ionic',
        cpuLoad: 'Высокая',
        gpuLoad: 'Высокая',
        memoryUsage: 'Высокий',
        loadSpeed: 'Умеренная',
        energyConsumption: 'Повышенное'
      }
    ]
  })
}
</script>
