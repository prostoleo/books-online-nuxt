<template>
  <div>
    <div class="btns inline-flex items-center gap-1">
      <button
        class="btn btn-info"
        :class="{ '--active': activeTab === 'info' }"
        @click="activeTab = 'info'"
      >
        О книге
      </button>
      <button
        class="btn btn-info"
        :class="{ '--active': activeTab === 'add' }"
        @click="activeTab = 'add'"
      >
        Дополнительно
      </button>
    </div>
    <!-- /.btns -->

    <transition name="content" mode="out-in">
      <div
        v-if="activeTab === 'info'"
        key="info"
        class="tab__content tab__content--1 info__content"
      >
        <p class="info__text text-mid-grey">
          {{ book.attributes.secondaryDescription }}
        </p>
      </div>
      <!-- /.info__content -->

      <div
        v-else-if="activeTab === 'add'"
        key="add"
        class="tab__content tab__content--2 add__content"
      >
        <p class="add__text">Дополнительная информация</p>
        <ul class="add__list p-4 text-blackish">
          <li class="add__item">
            <b>Вес:</b> <span>{{ book.attributes.weight }} гр.</span>
          </li>
          <li class="add__item">
            <b>Обложка:</b> <span>{{ book.attributes.cover }}</span>
          </li>
          <li class="add__item">
            <b>Год издания:</b>
            <span>{{ book.attributes.yearOfPublish }} г.</span>
          </li>
          <li class="add__item">
            <b>Страницы:</b> <span>{{ book.attributes.pages }}</span>
          </li>
          <li class="add__item">
            <b>Возрастная категория:</b>
            <span>{{ book.attributes.yearRestriction }}+</span>
          </li>
        </ul>
      </div>
      <!-- /.add__content -->
    </transition>
  </div>
  <!-- /.info__wrapper -->
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      activeTab: 'info', // info | add
    };
  },
};
</script>

<style lang="scss" scoped>
.content-enter-active {
  transition: all 0.25s ease-in;
}
.content-leave-active {
  transition: all 0.25s ease-out;
}
.content-enter-from, .content-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform-origin: top center;
  transform: scaleY(0);
  // max-height: 0;
  // clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  opacity: 0;
  visibility: hidden;
}
.content-enter-to, .content-leave-from
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform-origin: bottom center;
  transform: scaleY(100%);
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  // max-height: 1000px;
  opacity: 1;
  visibility: visible;
}

.info__wrapper {
  .btns {
    // display: inline-flex;
    // align-items: center;

    // .btn + .btn {
    //   margin-left: 0.25rem;
    // }
  }

  .btn-info {
    @extend %tpl-btn-filter;
    border-bottom: 1px solid $light-grey;

    &.--active {
      border-bottom-color: transparent;
    }
  }

  .info__content,
  .add__content {
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid $light-grey;

    margin-bottom: 2rem;

    display: block;

    // display: none;
    // // max-height: 0;
    // opacity: 0;
    // visibility: hidden;

    // transform: scaleY(0);
    // transform-origin: top center;

    // transition: transform 250ms ease, opacity 250ms ease, visibility 250ms ease,
    //   max-height 50ms ease;

    // &.--active-block {
    //   display: block;
    // }

    // &.--active {
    //   max-height: 100%;
    //   opacity: 1;
    //   visibility: visible;

    //   transform: scaleY(1);
    // }

    .info__text,
    .add__text {
      // font-size: 14px;
      // line-height: 1.5;
      // color: $mid-grey;
    }
  }

  .add__content {
    // display: none;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid $light-grey;
    margin-bottom: 2rem;

    // display: none;

    // &.--active {
    //   display: block;
    // }

    .add__text {
      // font-size: 1.4rem;
      // line-height: 1.5;
      // color: $mid-grey;
    }

    .add__list {
      padding: 1rem;

      .add__item {
        // font-size: 14px;
        // font-weight: 500;
        // color: $blackish;

        margin-bottom: 0.5em;
      }
    }
  }
}
</style>
