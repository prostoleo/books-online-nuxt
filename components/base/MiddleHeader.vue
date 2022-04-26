<template>
  <div class="middle-header py-3">
    <div class="container flex flex-wrap gap-y-3 md:(flex-nowrap)">
      <a href="/">
        <img class="logo" src="/logo.svg" alt="логотип Books Online" />
      </a>
      <div class="input-block">
        <input
          id="input-search"
          type="search"
          name="search"
          placeholder="Введите запрос"
        />
        <button>
          <ion-icon id="search-icon" name="search-sharp"></ion-icon>
          <span>Поиск</span>
        </button>
      </div>
      <div class="action-block">
        <button class="btn-middle-header btn-middle-header--cart">
          <span>Корзина</span>
          <ion-icon name="cart"></ion-icon>
        </button>
        <button class="btn-middle-header btn-middle--like">
          <span>Избранное</span>
          <ion-icon name="heart"></ion-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.middle-header {
  @apply bg-light-grey;

  img.logo {
    @apply w-20 mr-2 md:(w-full max-w-32);
  }

  .input-block {
    @apply flex-grow basis-full border border-2 border-solid border-accent relative order-2 2sm:(order-1 basis-auto self-center mr-2);

    input {
      @apply block w-full p-2;
    }

    button {
      @apply absolute top-0 right-0 bottom-0 inline-flex items-center gap-2 bg-accent text-white px-3 py-2;

      span {
        @apply leading-none;
      }

      ion-icon {
        @apply text-xl;
      }
    }
  }

  .action-block {
    @apply order-1 flex-1 flex items-center justify-end gap-2 2sm:(order-2);

    .btn-middle-header {
      @apply inline-flex items-center hover:(text-accent) focus:(text-accent);

      span {
        @apply hidden 2sm:(block);
      }

      ion-icon {
        @apply text-xl;
      }
    }
  }
}
</style>
