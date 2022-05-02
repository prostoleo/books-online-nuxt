<template>
  <div
    id="book-wrapper"
    class="book__wrapper p-6 rounded-md border border-solid border-light-grey mb-8 md:(grid grid-cols-4 grid-flow-col gap-5)"
  >
    <div class="book-img-wrapper md:(col-span-1)">
      <img
        :src="
          'http://localhost:1337' +
          book.attributes.bookImage.data.attributes.formats.medium.url
        "
        alt="Ромео и Джульетта"
        class="object-cover"
      />
    </div>

    <div class="book__content md:(col-span-3)">
      <h2 class="book__author font-medium text-blackish mb-[0.25em]">
        {{ book.attributes.author }}
      </h2>
      <h2 class="book__title font-bold text-blackish mb-[0.5em]">
        {{ book.attributes.title }}
      </h2>
      <p class="book__text leading-relaxed text-mid-grey mb-[0.75em]">
        {{ book.attributes.mainDescription }}
      </p>

      <div class="book__buy flex items-center flex-wrap">
        <p
          class="buy__price flex flex-col items-start font-semibold text-bluey mr-8"
        >
          Цена:
          <span
            v-if="book.attributes.discount"
            data-content="``"
            class="prev__price text-blackish relative before:( absolute top-1/2 left-0 right-0 transform -translate-y-1/2 w-full h-0.5 bg-blackish)"
            >{{
              parseInt(
                book.attributes.price * (1 + book.attributes.discount / 100)
              )
            }}
            ₽</span
          >
          <span class="cur__price text-red-bright font-bold mb-4"
            >{{ book.attributes.price }} ₽</span
          >
        </p>

        <button
          class="btn btn-add-cart py-[.5em] px-[1em] relative transform translate-y-0 transition-transform duration-200"
        >
          <ion-icon class="inline-block text-white mr-2" name="cart"></ion-icon>
          В корзину
        </button>

        <button
          id="add-to-fav"
          class="btn btn-add-fav inline-block leading-none h-5 transform scale-x-100 scale-y-100 transition-all duration-200 ease-in hover:(opacity-80) focus:(opacity-80)"
          data-title="Избранное"
        >
          <!-- :class="{'text-accent': ''}" -->
          <ion-icon class="text-2xl text-blackish" name="heart"></ion-icon>
        </button>
      </div>
      <!-- /.book__buy -->
    </div>
    <!-- /.book__content -->
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.book__wrapper {
  // padding: 1.5rem;

  // // display: flex;
  // // align-items: flex-start;
  // // flex-direction: column;

  // border-radius: 5px;
  // border: 1px solid $light-grey;

  // margin-bottom: 2rem;

  .book__img {
    // flex-basis: 100%;

    // object-fit: contain;
    // max-height: 200px;

    // margin-bottom: 1rem;
  }

  .book__content {
    .book__title,
    .book__author {
      font-size: clamp(24px, 2.75vw, 40px);
      // font-weight: 700;
      // color: $blackish;
      // margin-bottom: 0.5em;
    }

    .book__author {
      font-size: clamp(20px, 2.5vw, 32px);
      // font-weight: 500;
      // margin-bottom: 0.25em;
    }

    .book__text {
      font-size: clamp(14px, 2vw, 20px);
      // line-height: 1.6;
      // color: $mid-grey;

      // margin-bottom: 0.75em;
    }

    .book__buy {
      /* padding: 1rem;
          border-radius: 5px;
          border: 1px solid $light-grey; */

      // display: flex;
      // align-items: center;
      // justify-content: space-between;
      // flex-wrap: wrap;

      .buy__price {
        // display: flex;
        // flex-direction: column;
        // align-items: flex-start;

        font-size: clamp(22px, 2.5vw, 30px);
        // font-weight: 600;
        // color: $bluey;

        span {
          // display: block;
        }

        .prev__price {
          font-size: clamp(18px, 2.2vw, 25px);
          // color: $blackish;
          // position: relative;

          &::before {
            content: '';
            // position: absolute;
            // top: 50%;
            // left: 0;
            // right: 0;

            // transform: translateY(-50%);

            // width: 100%;
            // height: 2px;
            // background-color: $blackish;
          }
        }

        .cur__price {
          font-size: clamp(25px, 2.5vw, 30px);
          // color: $red-bright;
          // font-weight: 700;
          // margin-bottom: 1rem;
        }
      }

      .btn-add-cart {
        @extend %tpl-btn-add-to-cart;

        // padding: 0.5em 1em;
        font-size: 20px;

        // position: relative;
        // transform: translateY(0px);
        // transition: 250ms transform ease-in;

        margin: 0 auto 0 2rem;

        @extend %tpl-effect-btn-add-cart;
      }

      .btn-add-fav {
        // color: $blackish;
        // font-size: 18px;

        // transform: scaleX(1) scaleY(1);
        // transition: 250ms color ease-in, 250ms transform ease-in;

        // &:hover,
        // &:focus {
        //   opacity: 0.8;
        // }

        &:active {
          outline: none;
          transform: scaleX(1.25) scaleY(1.25);
          color: $accent;
        }

        // &.--active {
        //   color: $accent;
        // }
      }
    }
  }
}
</style>
