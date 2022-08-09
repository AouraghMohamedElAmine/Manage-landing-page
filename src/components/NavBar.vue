<template>
  <div>
    <nav
      id="navBar"
      class="
        nav-bar
        flex
        items-center
        justify-between
        sticky
        py-5
        text-darkBlue
      "
    >
      <div><img :src="logo" alt="logo" /></div>
      <ul
        class="
          hidden
          md:flex md:flex-row
          text-darkBlue
          items-center
          justify-evenly
          font-semibold
          md:w-8/12
        "
      >
        <li class="text-darkBlue"><a href="#">Pricing</a></li>

        <li class="text-darkBlue">
          <a href="#">Product</a>
        </li>

        <li class="text-darkBlue">
          <a href="#">About Us</a>
        </li>

        <li class="text-darkBlue">
          <a href="#">Careers</a>
        </li>
        <li class="text-darkBlue">
          <a href="#">Community</a>
        </li>
      </ul>

      <div class="hidden md:block">
        <button class="btn shadow-md shadow-red">Get Started</button>
      </div>

      <div class="md:hidden block">
        <div @click="toggleNav">
          <i
            v-if="!isMobileMenu"
            ref="burgerBars"
            class="text-darkBlue fas fa-bars text-2xl"
          ></i>
          <i
            v-if="isMobileMenu"
            ref="exit"
            class="text-darkBlue text-2xl fa-solid fa-x"
          ></i>
        </div>
      </div>
    </nav>
    <div
      ref="mobileNav"
      class="
        mobile-nav
        text-darkBlue
        bg-red-400
        w-11/12
        m-auto
        font-bold
        rounded-md
        md:hidden
        hidden
        mx-5%
        py-4
        bg-white
      "
    >
      <ul class="text-center text-darkBlue">
        <li class="py-4 text-darkBlue font-semibold">
          <a href="#">Pricing</a>
        </li>
        <li class="py-4 text-darkBlue font-semibold">
          <a href="#">Product</a>
        </li>
        <li class="py-4 text-darkBlue font-semibold">
          <a href="#">About Us</a>
        </li>
        <li class="py-4 text-darkBlue font-semibold">
          <a href="#">Careers</a>
        </li>
        <li class="py-4 text-darkBlue font-semibold">
          <a href="#">Community</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.svg";
export default {
  components: {},
  data() {
    return {
      isMobileMenu: false,
      logo,
    };
  },
  methods: {
    toggleNav() {
      this.$refs.mobileNav.classList.toggle("hidden");
      this.isMobileMenu = !this.isMobileMenu;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.mobile-nav {
  outline: rgba(100, 100, 100, 0.2) solid 100vh;
}

.body-overlay {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background: rgb(238, 238, 238);
  background: linear-gradient(
    0deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(0, 0, 0, 0.010241596638655426) 100%
  );
}
.bm-burger-button {
  top: 25px !important;
}
</style>