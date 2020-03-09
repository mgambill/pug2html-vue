"use strict";
// Default options for html2pug.
export const defaultOptions = {
  caseSensitive: true,
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  commas: true,
  doubleQuotes: false,
  fragment: false,
  preserveLineBreaks: true,
  removeEmptyAttributes: true,
  tabs: false
};
var HtmlNodeType;
(function(HtmlNodeType) {
  HtmlNodeType[(HtmlNodeType["Element"] = 1)] = "Element";
  HtmlNodeType[(HtmlNodeType["Text"] = 3)] = "Text";
  HtmlNodeType[(HtmlNodeType["CData"] = 4)] = "CData";
  HtmlNodeType[(HtmlNodeType["Comment"] = 8)] = "Comment";
  HtmlNodeType[(HtmlNodeType["Document"] = 9)] = "Document";
  HtmlNodeType[(HtmlNodeType["DocumentType"] = 10)] = "DocumentType";
})(HtmlNodeType || (HtmlNodeType = {}));

export class Parser {
  constructor(options) {
    this.options = options || defaultOptions;
    this.parseHTML = markup => {
      if (
        markup
          .toLowerCase()
          .trim()
          .indexOf("<!doctype") === 0
      ) {
        var doc = document.implementation.createHTMLDocument("");
        doc.documentElement.innerHTML = markup;
        console.dir("A", doc);
        return doc;
      }
      if ("content" in document.createElement("template")) {
        // Template tag exists!
        var el = document.createElement("template");
        el.innerHTML = markup;
        console.dir("B", el.content);
        return el.content;
      }
      // Template tag doesn't exist!
      var docfrag = document.createDocumentFragment();
      var el1 = document.createElement("body");
      el1.innerHTML = markup;
      for (let c of el1.childNodes) docfrag.appendChild(c);
      console.dir("C", docfrag);
      return docfrag;
    };
    this.indent = cnt => this.tab.repeat(cnt);
    this.isMultiLine = value =>
      ((value === null || value === void 0 ? void 0 : value.split("\n")) || [])
        .length > 1;
    this.tab = this.options.tabs ? "\t" : "..";
  }
  parse(content) {
    if (content === null) {
      return "";
    }
    if (typeof content === "string") {
      const fragment = this.parseHTML(content);
      const sb = [];
      for (var child of fragment.childNodes) {
        sb.push(this.createMarkup(child));
      }
      return sb.join("\n");
    }
    return this.createMarkup(content);
  }
  createMarkup(el, depth = 0) {
    // console.group(">", el.tagName, el.nodeType)
    const sb = [];
    if (el.nodeType === HtmlNodeType.Text) {
      this.createText(sb, el, depth);
    } else if (el.nodeType === HtmlNodeType.DocumentType) {
      sb.push("doctype html");
    } else {
      this.createElement(sb, el, depth);
    }
    const children = this.activeChildNodes(el);
    if (children.length) {
      for (var child of children) {
        sb.push(this.createMarkup(child, depth + 1));
      }
    }
    // console.groupEnd();
    return sb.join("\n");
  }
  createText(sb, node, depth, indent = true, prefix = "|") {
    // console.log(":: createText", node.textContent)
    const text = node.textContent;
    if (text === null) return;
    if (text.indexOf("\n") !== -1) {
      sb.push("");
      var segments = text.trim().split("\r\n");
      for (var segment in segments) {
        sb.push(`${this.indent(depth)}${prefix} ${segment}`);
      }
    } else {
      if (indent) sb.push(`${this.indent(depth)}${prefix} ${text}`);
      else sb.push(` ${text}`);
    }
  }
  createElement(sb, node, depth) {
    var _a, _b;
    console.log(":: createElement");
    if (node.tagName === "CUSTOMMODAL") console.dir(node);
    const q = this.options.doubleQuotes ? `"` : `'`;
    const space = this.options.commas ? `, ` : ` `;
    const tagName = node.tagName.toLowerCase();
    const attributeList = [];
    const pugNode = [];
    let classes = "";
    let specialClasses = [];
    let shorten = false;
    pugNode.push(tagName);
    const hasSpecialChars = x => /[:./]/.test(x);

    for (const a of Array.from(node.attributes)) {
      const name = a.name;
      const value = a.value;
      let c = value.split(" ");
      switch (name) {
        case "id":
          shorten = true;
          break;
        case "class":
          shorten = true;
          specialClasses = c.filter(hasSpecialChars);
          classes = `.${c.filter(x => !hasSpecialChars(x)).join(".")}`;
          break;
        default:
          attributeList.push(`${name}=${q}${value}${q}`);
          break;
      }
    }
    // Remove div tagName
    if (tagName === "div" && shorten) {
      pugNode.splice(0, 1);
    }
    if (node.id) {
      pugNode.push(`#${node.id}`);
    }
    if (classes) {
      pugNode.push(classes);
    }
    if (specialClasses.length > 0)
      attributeList.push(`class="${specialClasses.join(" ")}"`);
    if (attributeList.length > 0) {
      pugNode.push(`(${attributeList.join(space)})`);
    }
    if (
      node.hasChildNodes &&
      node.childNodes.length === 1 &&
      ((_a = node.firstChild) === null || _a === void 0
        ? void 0
        : _a.nodeType) === HtmlNodeType.Text
    ) {
      let text =
        (_b = node.firstChild) === null || _b === void 0
          ? void 0
          : _b.textContent;
      if (text !== null) {
        if (this.isMultiLine(text)) {
          const a = [];
          if (node.nodeName === "SCRIPT" || node.nodeName === "PRE") {
            pugNode.push(".\n");
            text.split("\n").forEach(line => {
              if (line.trim().length > 0 && this.options.preserveLineBreaks)
                a.push(`${this.indent(depth)} ${line}`);
            });
          } else {
            pugNode.push("\n");
            text.split("\n").forEach(line => {
              if (line.trim().length > 0)
                a.push(`${this.indent(depth + 1)}| ${line.trim()}`);
            });
          }
          pugNode.push(a.join("\n"));
        } else pugNode.push(` ${text}`);
      }
    }
    sb.push(`${this.indent(depth)}${pugNode.join("")}`);
  }
  activeChildNodes(node) {
    let children = Array.from(node.childNodes);
    if (node.nodeName === "TEMPLATE")
      children = Array.from(node.content.childNodes);
    const hasElements =
      node.nodeType === HtmlNodeType.Element &&
      children.filter(x => x.nodeType === HtmlNodeType.Element).length;
    let results = hasElements
      ? children.filter(x => {
          var _a;
          return (
            x.nodeType === HtmlNodeType.Element ||
            (x.nodeType === HtmlNodeType.Text &&
              ((_a = x.textContent) === null || _a === void 0
                ? void 0
                : _a.trim()))
          );
        })
      : [];
    // console.log(":: activeChildNodes", hasElements, results, node.nodeName)
    return results;
  }
}
