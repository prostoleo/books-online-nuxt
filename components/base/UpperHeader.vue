<template>
  <div class="py-2 bg-blackish">
    <div class="container ml-auto flex justify-end gap-3">
      <button class="btn-upper-header">
        <span>Войти</span>
        <ion-icon name="enter-outline"></ion-icon>
      </button>
      <button class="btn-upper-header">
        <span>Мой аккаунт</span>
        <ion-icon name="person-circle-outline"></ion-icon>
      </button>
      <button class="btn-upper-header">
        <span>Статус заказа</span>
        <ion-icon name="stats-chart-outline"></ion-icon>
      </button>
      <button class="btn-upper-header">
        <span>Помощь</span>
        <ion-icon name="help-circle-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn-upper-header {
  @apply inline-flex items-center gap-1 text-white transition-colors hover:(text-accent) focus:(text-accent);

  span {
    @apply hidden md:(block);
  }

  ion-icon {
    @apply text-xl;
  }
}
</style>
