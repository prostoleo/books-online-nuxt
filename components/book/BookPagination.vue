<template>
  <div
    class="w-full border border-solid border-light-grey rounded-md px-3 py-2 mb-5"
  >
    <ul
      class="inline-flex items-center flex-wrap"
      :data-uuid="book.attributes.uuid"
    >
      <li class="py-1 px-2" data-info="all">
        <NuxtLink
          :to="{ name: 'IndexPage' }"
          class="text-sm text-mid-grey hover:(underline)"
          >Все</NuxtLink
        >&nbsp;»
      </li>
      <li class="py-1 px-2" data-info="category">
        <NuxtLink
          :to="{
            name: 'IndexPage',
            query: {
              category: capitalizeFunc(book.attributes.category),
            },
          }"
          class="text-sm text-mid-grey hover:(underline)"
          >{{ capitalizeFunc(book.attributes.category) }}</NuxtLink
        >&nbsp;»
      </li>
      <li class="py-1 px-2" data-info="subcategory">
        <NuxtLink
          :to="{
            name: 'IndexPage',
            query: { subcategory: book.attributes.subcategory },
          }"
          class="text-sm text-mid-grey hover:(underline)"
          >{{ book.attributes.subcategory }}</NuxtLink
        >&nbsp;»
      </li>
      <li class="py-1 px-2">
        <a
          href=""
          class="text-sm text-mid-grey hover:(underline)"
          aria-disabled="true"
          >{{ book.attributes.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { capitalizeFunc } from '~/utils/capitalize';

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      capitalizeFunc,
    };
  },
};
</script>

<style lang="scss" scoped></style>
