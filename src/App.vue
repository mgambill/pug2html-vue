<template lang="pug">
#app
  AppNavbar
  section
    router-view

</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100%;
}

#app {
  display: grid;
  grid-template-rows: 3rem 1fr;
  height: 100vh;
}
</style>
