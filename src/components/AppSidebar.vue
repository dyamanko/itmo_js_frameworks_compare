<template>
  <v-navigation-drawer >
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" @click="$router.push(item.route)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    items: [
      { title: 'Главная', route: '/' },
      { title: 'Ionic', route: '/ionic' },
      { title: 'React Native', route: '/react' },
      { title: 'NativeScript', route: '/native' },
      { title: 'Сравнение фреймворков', route: '/comp' },
      { title: 'Сравнение производительности', route: '/pref' },
      { title: 'Рекомендации по выбору', route: '/recs' }
    ]
  }),
  methods: {
    ...mapActions(['navigateTo'])
  }
}
</script>
