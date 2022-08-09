<template>
  <div
    class="md:flex md:flex-row flex flex-col-reverse text-center md:text-left"
  >
    <div class="md:w-6/12 md:pr-20 md:mt-10">
      <h1 class="md:text-5xl text-4xl font-bold text-darkBlue">
        Bring everyone together to build better products.
      </h1>
      <p class="md:my-6 my-3 md:pr-20">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <button class="btn my-3 mb-7 md:md-0 shadow-md shadow-red">
        Get Started
      </button>
    </div>
    <div class="self-end">
      <img :src="illustration" alt="" class="float-right" />
    </div>
  </div>
</template>

<script>
import illustration from "../assets/illustration-intro.svg";
export default {
  data() {
    return {
      illustration,
    };
  },
};
</script>

<style>
</style>