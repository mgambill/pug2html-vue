import * as monaco from "monaco-editor";

export default {
  name: "MonacoEditor",

  props: {
    original: String,
    value: {
      type: String,
      required: true
    },
    options: Object
  },

  model: {
    event: "change"
  },

  watch: {
    options: {
      deep: true,
      handler(options) {
        if (this.editor) {
          const editor = this.getModifiedEditor();
          editor.updateOptions(options);
        }
      }
    },

    value(newValue) {
      if (this.editor) {
        const editor = this.getModifiedEditor();
        if (newValue !== editor.getValue()) {
          editor.setValue(newValue);
        }
      }
    },

    language(newVal) {
      if (this.editor) {
        const editor = this.getModifiedEditor();
        this.monaco.editor.setModelLanguage(editor.getModel(), newVal);
      }
    },

    theme(newVal) {
      if (this.editor) {
        this.monaco.editor.setTheme(newVal);
      }
    }
  },

  mounted() {
    this.monaco = monaco;
    this.initMonaco();
  },

  beforeDestroy() {
    this.editor && this.editor.dispose();
  },

  methods: {
    initMonaco() {
      this.$emit("editorWillMount", this.monaco);

      const options = Object.assign({}, this.options, {
        value: this.value
      });

      this.editor = this.monaco.editor.create(this.$el, options);

      // this.editor.defineTheme('myTheme', {
      //   base: 'vs',
      //   inherit: true,
      //   rules: [{ background: 'EDF9FA' }],
      //   colors: {
      //     'editor.foreground': '#000000',
      //     'editor.background': '#EDF9FA',
      //     'editorCursor.foreground': '#8B0000',
      //     'editor.lineHighlightBackground': '#0000FF20',
      //     'editorLineNumber.foreground': '#008800',
      //     'editor.selectionBackground': '#88000030',
      //     'editor.inactiveSelectionBackground': '#88000015'
      //   }
      // });
      // this.editor.setTheme('myTheme');

      // @event `change`
      const editor = this.getModifiedEditor();

      editor.onDidChangeModelContent(event => {
        const value = editor.getValue();
        if (this.value !== value) {
          this.$emit("change", value, event);
        }
      });

      this.$emit("editorDidMount", this.editor);
    },

    getEditor() {
      return this.editor;
    },

    getModifiedEditor() {
      return this.diffEditor ? this.editor.getModifiedEditor() : this.editor;
    },

    focus() {
      this.editor.focus();
    },

    refresh(options) {
      this.editor.layout(options);
    }
  },

  render(h) {
    return h("div");
  }
};
