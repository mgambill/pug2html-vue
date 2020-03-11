<template lang="pug">
header.bg-indigo-800.p-2(class="lg:flex lg:items-center lg:justify-between")
  .flex.flex-1.h-full.items-top.min-w-0
    h2.text-2xl.font-bold.leading-7.text-indigo-200(class="sm:text-3xl sm:leading-9 sm:truncate") HTML 2 PUG
    div.ml-5: span.inline-flex.items-center.px-2.rounded.text-xs.font-medium.leading-4.bg-indigo-900.text-indigo-200(class="py-0.5") Preview
  //-template
    .flex-1.min-w-0
      h2.text-2xl.font-bold.leading-7.text-white(class="sm:text-3xl sm:leading-9 sm:truncate")
        | HTML 2 PUG
      .mt-1.flex.flex-col(class="sm:mt-0 sm:flex-row sm:flex-wrap")
        .mt-2.flex.items-center.text-sm.leading-5.text-gray-300(class="sm:mr-6")
          svg.flex-shrink-0.h-5.w-5.text-gray-500(fill="currentColor" viewBox="0 0 20 20" class="mr-1.5")
            path(fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd")
            path(d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z")
          | Full-time
        .mt-2.flex.items-center.text-sm.leading-5.text-gray-300(class="sm:mr-6")
          svg.flex-shrink-0.h-5.w-5.text-gray-500(fill="currentColor" viewBox="0 0 20 20" class="mr-1.5")
            path(fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd")
          | Remote
        .mt-2.flex.items-center.text-sm.leading-5.text-gray-300(class="sm:mr-6")
          svg.flex-shrink-0.h-5.w-5.text-gray-500(fill="currentColor" viewBox="0 0 20 20" class="mr-1.5")
            path(d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z")
            path(fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd")
          | $120k – $140k
        .mt-2.flex.items-center.text-sm.leading-5.text-gray-300
          svg.flex-shrink-0.h-5.w-5.text-gray-500(fill="currentColor" viewBox="0 0 20 20" class="mr-1.5")
            path(fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd")
          | Closing on January 9, 2020
    .mt-5.flex(class="lg:mt-0 lg:ml-4")
      span.hidden.shadow-sm.rounded-md(class="sm:block")
        button.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-gray-600.transition.duration-150.ease-in-out(type="button" class="hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700")
          svg.-ml-1.mr-2.h-5.w-5.text-gray-300(fill="currentColor" viewBox="0 0 20 20")
            path(d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z")
          | Edit
      span.hidden.ml-3.shadow-sm.rounded-md(class="sm:block")
        button.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-gray-600.transition.duration-150.ease-in-out(type="button" class="hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700")
          svg.-ml-1.mr-2.h-5.w-5.text-gray-300(fill="currentColor" viewBox="0 0 20 20")
            path(fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd")
          | View
      span.shadow-sm.rounded-md(class="sm:ml-3")
        button.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-500.transition.duration-150.ease-in-out(type="button" class="hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600")
          svg.-ml-1.mr-2.h-5.w-5(fill="currentColor" viewBox="0 0 20 20")
            path(fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd")
          | Publish
      span.ml-3.relative.shadow-sm.rounded-md(x-data="{ open: false }" class="sm:hidden")
        button.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-gray-700.transition.duration-150.ease-in-out(@click="open = !open" type="button" class="hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray focus:border-gray-800")

          | More
          svg.-mr-1.ml-2.h-5.w-5.text-gray-400(fill="currentColor" viewBox="0 0 20 20")
            path(fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd")
        .origin-top-left.absolute.left-0.mt-2.-ml-1.w-48.rounded-md.shadow-lg(x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
          .py-1.rounded-md.bg-white.shadow-xs
            a.block.px-4.py-2.text-sm.leading-5.text-gray-700.transition.duration-150.ease-in-out(href="#" class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100") Edit
            a.block.px-4.py-2.text-sm.leading-5.text-gray-700.transition.duration-150.ease-in-out(href="#" class="hover:bg-gray-100 focus:outline-none focus:bg-gray-100") View

</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
