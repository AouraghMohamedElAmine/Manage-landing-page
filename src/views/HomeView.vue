<template>
  <div class="home">
    <NavBar class="py-5 px-6 md:px-32" />
    <HeroSection class="my-5 mb-10 px-6 md:px-32" />
    <InformationsSection class="my-5 md:px-32" />
    <TestimonialsSection class="my-5" />
    <BannerSection class="px-10 md:px-32" />
    <FooterSection class="px-4 md:px-32 hidden md:block" />
    <FooterMobileSection class="px-4 md:px-32 md:hidden" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import InformationsSection from "@/components/InformationsSection.vue";
import TestimonialsSection from "@/components/TestimonialsSection.vue";
import BannerSection from "@/components/BannerSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import FooterMobileSection from "@/components/FooterMobileSection.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HeroSection,
    InformationsSection,
    TestimonialsSection,
    BannerSection,
    FooterSection,
    FooterMobileSection,
  },
};
</script>
<style scoped>
.body {
  background-image: url("../assets/avatar-shanai.png"),
    url("../assets/avatar-shanai.png");
  background-position: right bottom, left top;
  background-size: cover contain;
  background-repeat: no-repeat, repeat;
}
</style>