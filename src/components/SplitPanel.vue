<template lang="pug">
div(style="background-color: #1e1e1e")
  article(ref="left")
    slot(name="left")

  article(ref="right")
    slot(name="right")
</template>

<script>
export default {
  name: "SplitPanel",
  mounted() {
    //eslint-disable-next-line
    Split([this.$refs.left, this.$refs.right], {
      sizes: [25, 75],
      minSize: 0,
      onDragEnd: this.onDragEnd
    });
  },
  methods: {
    onDragEnd(e) {
      this.$emit("change", e);
    },
    left() {
      return this.$refs.left;
    },
    right() {
      return this.$refs.right;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.gutter {
  cursor: e-resize;
  background: #191818;
}
.gutter:hover {
  background: #3c3b3b;
}
</style>
