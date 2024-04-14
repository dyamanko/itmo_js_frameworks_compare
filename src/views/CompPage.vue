// src/components/FrameworkComparison.vue

<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="frameworks"
      class="elevation-1"
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
    headers: [
      { title: 'Название', value: 'name' },
      { title: 'Кроссплатформенность', value: 'crossPlatform' },
      { title: 'Простота изучения', value: 'easeOfLearning' },
      { title: 'Доступ к нативному функционалу', value: 'nativeAccess' },
      { title: 'Сообщество и поддержка', value: 'communitySupport' },
      { title: 'Среда разработки', value: 'devEnvironment' },
      { title: 'Стабильность и надежность', value: 'stability' },
      { title: 'Безопасность', value: 'security' },
      { title: 'Тестирование и отладка', value: 'testingDebugging' }
    ],
    frameworks: [
      {
        name: 'React Native',
        crossPlatform: 'Android, iOS, экспериментальная поддержка Web, Windows, macOS',
        easeOfLearning: 'Средний, требует знания JavaScript и React',
        nativeAccess: 'Высокий, доступ через JavaScript к большинству нативных API',
        communitySupport: 'Активное, обширная документация и ресурсы',
        devEnvironment: 'VS Code, WebStorm, Atom и др.',
        stability: 'Высокая, регулярные обновления и исправления',
        security: 'Предоставляет встроенные средства защиты',
        testingDebugging: 'Встроенные инструменты, поддержка сторонних (Jest, Detox)'
      },
      {
        name: 'NativeScript',
        crossPlatform: 'Android, iOS',
        easeOfLearning: 'Средний, требует знания JavaScript и нативных API',
        nativeAccess: 'Высокий, прямой доступ к нативным API',
        communitySupport: 'Активное, хорошая документация',
        devEnvironment: 'VS Code, WebStorm и др.',
        stability: 'Высокая, регулярные обновления',
        security: 'Использует нативные механизмы безопасности',
        testingDebugging: 'Встроенные инструменты разработчика, поддержка сторонних (Karma)'
      },
      {
        name: 'Ionic',
        crossPlatform: 'Android, iOS, Web',
        easeOfLearning: 'Низкий, основан на базовых вебтехнологиях',
        nativeAccess: 'Средний, ограниченный доступ через Cordova/ Capacitor',
        communitySupport: 'Очень активное, обширная документация',
        devEnvironment: 'VS Code, Atom и др.',
        stability: 'Высокая, стабильный',
        security: 'Использует плагины Cordova или Capacitor',
        testingDebugging: 'Поддержка сторонних инструментов (Angular tooling, Jasmine, Karma и другие)'
      }
    ],
  })
}
</script>
