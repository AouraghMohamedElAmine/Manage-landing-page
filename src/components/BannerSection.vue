<template>
  <div
    class="
      md:flex
      justify-between
      md:text-left
      text-center
      bg-red
      md:py-16
      py-14
      items-center
      banner
    "
  >
    <div class="md:text-3xl text-2xl text-white md:w-4/12 font-bold">
      Get Started Simplify how your team works today.
    </div>
    <div>
      <button class="btn mt-4 md:mt-0 shadow-md shadow-gray">
        Get Started
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  background-image: url("../assets/bg-simplify-section-desktop.svg");
  background-position: 100px;
}
.btn {
  color: hsl(12, 88%, 59%);
  background-color: hsl(0, 0%, 98%);
}
@media only screen and (max-width: 600px) {
  .banner {
    background-repeat: no-repeat;
    background-image: url("../assets/bg-simplify-section-mobile.svg");
    background-position: 0px;
  }
}
</style>