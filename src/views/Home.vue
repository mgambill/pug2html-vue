<template lang="pug">

  SplitPanel.flex.h-full.overflow-hidden(ref="splitter" @change="onChange")
    template(v-slot:left)
      MonacoEditor.w-full.h-full(ref="me_code" v-model='code' language='html' :options='options')
    template(v-slot:right)
      MonacoEditor.w-full.h-full(ref="me_pug" v-model='pug' language='html' :options='options')
</template>

<script>
import MonacoEditor from "../components/Monaco";
import SplitPanel from "../components/SplitPanel";
import { Parser } from "@nmyvision/html2pug";

export default {
  components: {
    MonacoEditor,
    SplitPanel
  },

  data() {
    return {
      code: "",
      parser: new Parser(),
      options: {
        language: "html",
        lineNumbers: "on",
        lineDecorationsWidth: 0,
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: "vs-dark",
        automaticLayout: true,
        "editor.background": "#EDF9FA",
        minimap: {
          enabled: false
        }
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
  },
  methods: {
    onChange() {
      const { clientHeight: h, clientWidth: wl } = this.$refs.splitter.left();
      const { clientWidth: wr } = this.$refs.splitter.right();

      this.$refs.me_code.refresh({ width: wl, height: h });
      this.$refs.me_pug.refresh({ width: wr, height: h });
    }
  },
  async created() {
    const request = new Request("sample.txt");
    const response = await fetch(request);
    const text = await response.text();

    this.code = text;
  }
};
</script>
