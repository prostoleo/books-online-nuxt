<template>
  <div class="bottom-header">
    <div class="container">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link">Новости</a>
          </li>
          <!-- /.nav__item -->
          <li class="nav__item">
            <a href="#" class="nav__link">Акции</a>
          </li>
          <!-- /.nav__item -->
          <li class="nav__item">
            <a href="#" class="nav__link">Новинки</a>
          </li>
          <!-- /.nav__item -->
          <li class="nav__item">
            <a href="#-продаж" class="nav__link">Лидеры продаж</a>
          </li>
          <!-- /.nav__item -->
          <li class="nav__item">
            <a href="#" class="nav__link">Оплата</a>
          </li>
          <!-- /.nav__item -->
          <li class="nav__item">
            <a href="#" class="nav__link">Контакты</a>
          </li>
          <!-- /.nav__item -->
        </ul>
        <!-- /.nav__list -->
      </nav>
      <!-- /.nav -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom-header {
  @apply py-5 border-b border-b-dark-50/25;

  .nav {
    // .nav__list

    &__list {
      @apply flex flex-wrap items-center gap-x-2 gap-y-1;
    }

    // .nav__item

    &__item {
    }

    // .nav__link

    &__link {
      @apply px-3 py-2 rounded-xl transition-all duration-300 relative inline-block;

      &::before {
        content: '';
        transform: scale(0);
        @apply absolute left-0 top-0 w-full h-full bg-accent rounded-xl opacity-0 transition-all duration-300 -z-1;
      }

      &:hover,
      &:focus {
        @apply text-white duration-300;

        &::before {
          transform: scale(1);
          @apply opacity-100 transition-all duration-300;
        }
      }

      // hover:(text-white bg-accent)
    }
  }
}
</style>
