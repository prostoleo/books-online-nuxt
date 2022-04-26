<template>
  <footer class="py-8 bg-grey">
    <div
      class="container footer__container grid grid-flow-col grid-cols-[repeat(auto-fit,minmax(160px, 1fr))] gap-4"
    >
      <div class="footer__logo-copy">
        <div class="footer__logo">
          <img class="max-w-24 object-cover mb-[1rem]" src="/logo.svg" alt="" />
        </div>
        <p class="footer__copy text-xs text-light-grey mb-[1em]">
          &copy;&nbsp;Books Online
          <span class="block">Все права защищены, &nbsp;2021</span>
        </p>
      </div>
      <!-- /.footer__logo-copy -->

      <div class="footer__contact-info">
        <div class="contact-info">
          <h4 class="text-base font-semibold mb-[0.5em] text-white">
            Наш адрес
          </h4>
          <p class="address text-sm mb-[0.5em] text-light-grey">
            г. Москва, ул. Тульская, д. 1
          </p>
          <a href="" class="show-map text-sm text-light-grey underline"
            >Показать на карте</a
          >
        </div>
      </div>
      <!-- /.footer__contact-info -->

      <div class="footers__ways_pay">
        <h4 class="ways_pay__title text-base font-semibold mb-[1em] text-white">
          Способы оплаты
        </h4>
        <div
          class="footer__ways_pay_container flex items-center justify-between gap-x-2 gap-y-3 flex-wrap"
        >
          <!-- img {
          width: 100%;
          height: auto;
          object-fit: cover;
          max-width: 80px;
          margin-bottom: 10px;
        }

        img + img {
          margin-left: 5px;
        }

        #footer-visa {
          height: 40px !important;
        } */ -->
          <img
            src="/mastercard.svg"
            alt=""
            class="way_pay_img w-full h-auto object-cover max-w-[80px]"
          />
          <img
            src="/mir.svg"
            alt=""
            class="way_pay_img w-full h-auto object-cover max-w-[80px]"
          />
          <img
            id="footer-visa"
            src="/visa.svg"
            alt=""
            class="way_pay_img w-full h-auto object-cover max-w-[80px] h-10"
          />
        </div>
      </div>
      <!-- /.footers__ways-to-pay -->

      <div class="footer__social">
        <div class="social__title">
          <h4 class="text-base font-semibold mb-[0.5em] text-white mb-[1em]">
            Мы в социальных сетях
          </h4>
        </div>
        <div
          class="social__items w-full flex items-center justify-start gap-x-2"
        >
          <a href="" class="block w-8 hover:(opacity-[80%])">
            <img src="/telegram.svg" alt="" class="social__item" />
          </a>
          <a href="" class="block w-8 hover:(opacity-[80%])">
            <img src="/vk.svg" alt="" class="social__item" />
          </a>
          <a href="" class="block w-8 hover:(opacity-[80%])">
            <img src="/odnoklassniki.svg" alt="" class="social__item" />
          </a>
        </div>
      </div>
      <!-- /.footer__social -->
    </div>
  </footer>
  <!-- /footer -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
