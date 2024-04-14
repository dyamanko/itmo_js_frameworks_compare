<template>
    <v-container>
      <!-- Заголовок страницы -->
      <v-row>
        <v-col>
          <v-card class="mb-4" color="deep-purple accent-4" dark>
            <v-card-title class="justify-center">Подробный анализ фреймворка NativeScript</v-card-title>
            <v-card-text>
              NativeScript позволяет разработчикам использовать JavaScript, TypeScript или Angular для создания нативных мобильных приложений на iOS и Android.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Основные разделы анализа -->
      <v-expansion-panels popout>
        <v-expansion-panel>
          <v-expansion-panel-header>Введение в NativeScript</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              NativeScript — это открытый фреймворк, который позволяет разработчикам создавать мобильные приложения на чистом JavaScript, TypeScript или Angular, обеспечивая прямой доступ к нативным API платформ без использования веб-вью.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header>Ключевые особенности и преимущества</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Одно из ключевых преимуществ NativeScript — это его способность давать разработчикам прямой доступ к нативным элементам и API из кода JavaScript или TypeScript. Это позволяет приложениям выглядеть и работать как нативные на разных платформах. Кроме того, NativeScript поддерживает использование Angular и Vue.js, что делает его привлекательным для разработчиков, уже знакомых с этими фреймворками.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header>Примеры использования и кейсы</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              NativeScript используется в различных отраслях, включая финансы, здравоохранение и образование, для создания приложений, которые требуют высокой производительности, нативного взаимодействия и доступа к API устройств. Приложения на NativeScript могут включать сложные визуальные интерактивы и производительные анимации.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
  
        <v-expansion-panel>
          <v-expansion-panel-header>Ограничения и недостатки</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Основным недостатком NativeScript является потенциально более высокий порог входа для новичков в разработке, особенно для тех, кто не знаком с Angular или TypeScript. Также, как и другие кроссплатформенные фреймворки, он может столкнуться с ограничениями при реализации экстремально специфичных платформенных функций.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  </style>
  