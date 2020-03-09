<template lang="pug">
.wrapper.flex.h-screen.bg-gray-50
  section(ref="left")
    .h-full.flex-grow-1
      slot(name="left")

  section(ref="right")
    .h-full.flex-grow-1
      slot(name="right")
</template>

<script>
export default {
  name: "SplitPanel",
  mounted() {
    //eslint-disable-next-line
    Split([this.$refs.left, this.$refs.right], { minSize: 0 });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.gutter {
  cursor: e-resize;
  background: #a6a9b7;
}
.gutter:hover {
  background: #5a5f73;
}
</style>
