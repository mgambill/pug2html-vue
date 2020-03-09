<template lang="pug">

  SplitPanel
    template(v-slot:left)
      MonacoEditor.w-full.h-full(v-model='code', language='html', :options='options')
    template(v-slot:right)
      MonacoEditor.w-full.h-full(v-model='pug', language='html', :options='options')
</template>

<script>
import MonacoEditor from "vue-monaco";
import SplitPanel from "../components/SplitPanel";
import { Parser } from "../Parser";

const code = `<div class="grid-cols-2">
  <MonacoEditor
    class="editor"
    v-model="code"
    language="html"
    :options="options"
  />
  <MonacoEditor
    class="editor"
    v-model="code"
    language="html"
    :options="options"
  />
  </div>`;
export default {
  components: {
    MonacoEditor,
    SplitPanel
  },

  data() {
    return {
      code,
      parser: new Parser(),
      options: {
        language: "html",
        lineNumbers: "on",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: "vs-dark",
        automaticLayout: true
      }
    };
  },
  watch: {
    code() {}
  },
  computed: {
    pug() {
      return this.parser.parse(this.code);
    }
  }
};
</script>
