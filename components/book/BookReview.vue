<template>
  <div
    class="review__wrapper p-4 rounded-sm border border-solid border-light-grey"
  >
    <div class="review__content mb-6">
      <h3 class="review__title font-semibold text-blackish mb-[.5em]">
        Отзывы о книге
      </h3>

      <div class="review__item">
        <div class="user__info">
          <!-- <div class="user__img">
                    
                  </div> -->
          <img src="/img/users/male2.jpg" alt="" class="user__img" />
          <span class="user__nick">Федор</span>
        </div>
        <!-- /.user-info -->
        <div class="user__review">
          <p class="review__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quas
            reprehenderit corrupti voluptatibus assumenda corporis!
          </p>
        </div>
        <!-- /.user__review -->
      </div>
      <!-- /.review__item -->

      <div class="review__item">
        <div class="user__info">
          <!-- <div class="user__img">
                  </div> -->
          <img src="/img/users/female.jpg" alt="" class="user__img" />
          <span class="user__nick">Евгения</span>
        </div>
        <!-- /.user-info -->
        <div class="user__review">
          <p class="review__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nostrum porro, at totam, et, quas aut ullam iure recusandae
            voluptatibus ipsa? Officiis non assumenda temporibus voluptatem
            praesentium! Quisquam, temporibus praesentium.
          </p>
        </div>
        <!-- /.user__review -->
      </div>
      <!-- /.review__item -->
    </div>
    <!-- /.review__content -->

    <form class="form">
      <h3 class="form__title">Оставьте комментарий</h3>
      <input
        type="text"
        class="input input-name"
        name="user-name"
        placeholder="Ваше имя"
      />
      <input
        type="email"
        class="input input-email"
        name="user-email"
        placeholder="Ваш email"
      />
      <textarea
        class="textarea textarea-message"
        name="user-message"
        placeholder="Ваше сообщение"
      ></textarea>
      <button class="btn btn-submit">
        <!-- <div class="clip-path"></div> -->
        Отправить
      </button>
    </form>
    <!-- /.form -->
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
.review__wrapper {
  // padding: 1rem;
  // border-radius: 5px;
  // border: 1px solid $light-grey;

  .review__content {
    // margin-bottom: 1.5rem;

    .review__title {
      font-size: clamp(16px, 2vw, 20px);
      // font-weight: 600;
      // color: $blackish;

      // margin-bottom: 0.5em;
    }

    .review__item {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      width: 100%;

      padding: 1em 0;

      border-bottom: 1px solid $light-grey;

      .user__info {
        // flex-basis: 15%;
        // width: 20%;
        // min-width: 60px;
        margin-right: 15px;

        /* display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start; */

        .user__img {
          width: 60px;
          height: auto;
          object-fit: cover;
          margin-bottom: 0.5rem;

          border-radius: 10px;
          /* img {
                    
                  } */
        }

        .user__nick {
          display: block;
          text-align: center;

          font-size: 12px;
          font-weight: 500;
          color: $blackish;
        }
      }

      .user__review {
        width: 100%;
        // flex-basis: 88%;

        .review__text {
          font-size: 14px;
          line-height: 1.5;
          color: $blackish;
        }
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: space-between;

    padding-bottom: 10px;
    margin-top: 10px;

    .form__title {
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 600;
      color: $blackish;

      margin-bottom: 1em;
    }

    .input,
    .textarea {
      width: 100%;
      padding: 0.65em;

      font-size: 14px;
      font-family: inherit;
      line-height: 1.2;
      color: $blackish;

      border: 1px solid $light-grey;
      margin-bottom: 1em;

      &::placeholder {
        font-family: inherit;
        font-size: 14px;
        line-height: 1.2;
        color: $grey;
      }
    }

    .input {
      border-radius: 30px;
    }

    .textarea {
      resize: vertical;
    }

    .btn-submit {
      padding: 0.5em 1em;
      align-self: center;

      font-size: 14px;
      font-family: inherit;
      font-weight: 600;

      // border: 3px solid $accent;
      outline: 5px solid $accent;
      outline-offset: -1px;
      border-radius: 40px;

      position: relative;
      z-index: 1;

      transition: 250ms color ease-in;

      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-color: $accent;
        clip-path: circle(0% at 100% 0%);

        padding: 10px;
        z-index: -1;

        transition: 250ms clip-path ease-in;
      }

      &:hover,
      &:focus {
        color: $white;

        &::after {
          clip-path: circle(150% at 100% 0%);
        }
      }
    }
  }
}
</style>
