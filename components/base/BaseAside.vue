<template>
  <aside
    class="catalogue p-4 border border-2 border-solid border-light-grey mr-[3%] absolute top-[5rem] left-0 w-full h-auto max-w-72 bg-white transform -translate-x-15/10 z-20 transition-transform duration-700 xl:(translate-x-0 static)"
    :class="{ '!translate-x-0': openAside }"
  >
    <h1
      class="catalogue__title w-full mb-[0.5em] text-xl font-bold text-blackish py-3 px-4 flex justify-between items-center"
    >
      Каталог книг
    </h1>

    <ul class="catalogue__list relative z-[1]">
      <li class="catalogue__item relative z-[2] --active">
        <a
          href=""
          class="catalogue__link inline-block w-full py-[0.5em] px-[1em] text-blackish overflow-hidden transition-colors duration-200 hover:(text-white bg-accent)"
          @click.prevent="showBooksFromAside($event)"
          >Все</a
        >
      </li>

      <li class="catalogue__item">
        <a
          href=""
          class="catalogue__link inline-block w-full py-[0.5em] px-[1em] text-blackish overflow-hidden transition-colors duration-200 hover:(text-white bg-accent)"
          @click.prevent="showBooksFromAside($event)"
        >
          Художественная литература
        </a>
        <ul
          class="sublist opacity-0 invisible max-h-0 ml-[2.5em] transform scale-y-0 -translate-x-1/1"
        >
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Современная проза</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Классическая литература</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Детективы</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Фантастика</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Любовные романы</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Драматургия</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Биография и мемуары</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Приключения</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Юмор</a
            >
          </li>
        </ul>
      </li>
      <!-- /catalogue__item -->
      <li class="catalogue__item">
        <a
          href=""
          class="catalogue__link inline-block w-full py-[0.5em] px-[1em] text-blackish overflow-hidden transition-colors duration-200 hover:(text-white bg-accent)"
        >
          Учебная литература
        </a>
        <ul
          class="sublist opacity-0 invisible max-h-0 ml-[2.5em] transform scale-y-0 -translate-x-1/1"
        >
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Информатика</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Математика</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Физика</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Астрономия</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Химия</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Биология</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >Экология</a
            >
          </li>
          <li class="sublist__item">
            <a
              href=""
              class="sublist__link inline-block w-full text-sm font-normal py-[0.3em] px-[0.5em] border-b border-solid border-light-grey text-blackish transition-colors duration-300 hover:(bg-accent text-white)"
              >География</a
            >
          </li>
        </ul>
      </li>
      <!-- /catalogue__item -->
    </ul>
    <!-- /catalogue__list -->
  </aside>
  <!-- /aside.catalogue -->
</template>

<script>
export default {
  props: {
    openAside: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      // openAside: false,
    };
  },

  methods: {
    showBooksFromAside($event) {
      console.log('$event: ', $event);

      const link = $event.target.closest('.catalogue__link');

      if (!link) return;

      const category = link.textContent;

      this.$store.commit('books/changeActiveCategory', category);
    },
  },
};
</script>

<style lang="scss" scoped>
aside.catalogue {
  .catalogue__list {
    .catalogue__item {
      &.--active .catalogue__link {
        @apply bg-accent text-white;
      }

      &:hover .sublist {
        @apply transform scale-100 translate-y-0 opacity-100 visible max-h-[500px];
      }

      summary {
        // display: flex;
      }

      .catalogue__link {
        &:hover {
        }
      }

      .sublist {
        transition: 500ms transform ease-in 150ms, 500ms opacity ease-in 50ms,
          500ms visibility ease-in 50ms, 500ms max-height ease-in 50ms;

        .sublist__item {
          .sublist__link {
            &:hover {
            }
          }
        }
      }
    }

    .catalogue__item + .catalogue__item {
      @apply mt-2;
    }
  }
}
</style>
