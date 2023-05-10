<template>
  <v-app id="inspire" theme="dark">
    <v-app-bar class="px-3" density="compact">
      <v-spacer></v-spacer>
      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in menus" :key="link" @click="() => $router.push(link.route)">
          {{ link.name }}
        </v-tab>
      </v-tabs>
      <v-spacer/>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
const menus = [
  {name: 'home', route: '/'},
  {name: 'cadastro', route: '/pessoa'},
]
</script>
