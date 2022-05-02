<template>
  <div class="like__wrapper">
    <h4 class="like__title">Вам может также понравится</h4>

    <div class="like__container">
      <div class="like__item" dataset-like-id="NaN0f14jud">
        <img
          src="/db/img/gore-ot-uma.jpg"
          alt="Горе от ума"
          class="like__img"
        />
        <div class="like__content">
          <h5 class="title">Горе от ума</h5>
          <span class="price">555 ₽</span>
          <a class="btn btn-look" href="/product_page.html">Посмотреть</a>
        </div>
      </div>

      <div class="like__item" dataset-like-id="NaN0f73juf">
        <img
          src="/db/img/cup-of-tea-with-limon.gif"
          alt="Чашка чая с лимоном"
          class="like__img"
        />
        <div class="like__content">
          <h5 class="title">Чашка чая с лимоном</h5>
          <span class="price">685 ₽</span>
          <a class="btn btn-look" href="/product_page.html">Посмотреть</a>
        </div>
      </div>

      <div class="like__item" dataset-like-id="NaNgqbt0pe">
        <img
          src="/db/img/romeo-and-julietta.jpg"
          alt="Ромео и Джульетта"
          class="like__img"
        />
        <div class="like__content">
          <h5 class="title">Ромео и Джульетта</h5>
          <span class="price">785 ₽</span>
          <a class="btn btn-look" href="/product_page.html">Посмотреть</a>
        </div>
      </div>

      <div class="like__item" dataset-like-id="NaNir3kn8b">
        <img
          src="/db/img/legend. Dr Faust.jpg"
          alt="Легенда. Доктор Фауст"
          class="like__img"
        />
        <div class="like__content">
          <h5 class="title">Легенда. Доктор Фауст</h5>
          <span class="price">485 ₽</span>
          <a class="btn btn-look" href="/product_page.html">Посмотреть</a>
        </div>
      </div>
    </div>
    <!-- /.like__container -->
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
.like__wrapper {
  padding: 1rem;

  .like__title {
    font-size: clamp(16px, 2vw, 20px);
    font-weight: 600;
    color: $blackish;

    margin-bottom: 1em;
  }

  .like__item {
    display: flex;
    align-items: flex-end;
    // justify-content: space-between;

    padding: 1em 0;
    border-bottom: 1px solid $light-grey;

    .like__img {
      width: 20%;
      max-width: 120px;
      height: auto;
      object-fit: contain;

      margin-right: 2rem;
      flex: 0 1 20%;
    }

    .like__content {
      // width: 77%;
      flex: 0 1 70%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      .title {
        font-size: 14px;
        color: $grey;
        font-weight: 400;

        margin-bottom: 0.3em;
      }

      .price {
        font-size: 15px;
        font-weight: 500;
        color: $reddish;

        margin-bottom: 0.5em;
      }

      .btn-look {
        padding: 0.4em 0.8em;
        border-radius: 20px;
        color: $white;
        background-color: $blackish;

        position: relative;
        z-index: 1;
        font-size: 14px;

        &::after {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;

          background-color: $accent;

          clip-path: circle(0% at 100% 0%);

          transition: 250ms clip-path ease-in;
        }

        &:hover::after,
        &:focus::after {
          clip-path: circle(150% at 100% 0%);
        }
      }
    }
  }
}
</style>
