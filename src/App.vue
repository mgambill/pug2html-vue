<template lang="pug">
#app.bg-blue-900
  #nav
    router-link(to='/') Home
    |  |
    router-link(to='/about') About
  router-view

</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
