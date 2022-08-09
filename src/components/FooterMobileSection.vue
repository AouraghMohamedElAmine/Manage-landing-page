<template>
  <div class="bg-veryDarkBlue md:pt-12 pt-7 text-white">
    <div>
      <div class="flex flex-col justify-between">
        <div class="flex">
          <div class="search w-8/12">
            <input class="search-txt" type="text" name="" />
          </div>
          <div class="go w-4/12 bg-red">
            <input class="search-txt" type="button" value="go" />
          </div>
        </div>
      </div>
      <div class="flex justify-between px-8 my-10">
        <div class="w-6/16">
          <ul class="">
            <li class="pb-4 text-white"><a href="#">Home</a></li>
            <li class="pb-4 text-white"><a href="#">Pricing</a></li>
            <li class="pb-4 text-white"><a href="#">Products</a></li>
            <li class="pb-4 text-white"><a href="#">About Us</a></li>
          </ul>
        </div>
        <div class="w-6/16">
          <ul class="">
            <li class="pb-4 text-white"><a href="#">Careers</a></li>
            <li class="pb-4 text-white"><a href="#">Community</a></li>
            <li class="pb-4 text-white"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="flex justify-evenly">
        <i
          class="
            p-2
            mr-1
            block
            rounded-full
            text-3xl
            fab
            fa-facebook
            text-white
          "
        ></i>
        <i
          class="p-2 mx-1 block rounded-full text-3xl fab fa-youtube text-white"
        ></i>
        <i
          class="p-2 mx-1 block rounded-full text-3xl fab fa-twitter text-white"
        ></i>
        <i
          class="
            p-2
            mx-1
            block
            rounded-full
            text-3xl
            fab
            fa-pinterest
            text-white
          "
        ></i>
        <i
          class="
            p-2
            mx-1
            block
            rounded-full
            text-3xl
            fab
            fa-instagram
            text-white
          "
        ></i>
      </div>
      <div><img :src="logo" class="m-auto my-6" alt="logo" /></div>
    </div>
    <div class="text-center">Copyright 2020. All Rights Reserved</div>

    <div class="text-center pt-4">
      Challenge by Frontend Mentor. Coded by
      <a
        class="font-bold text-red"
        href="https://github.com/AouraghMohamedElAmine"
        >Aouragh Mohamed El Amine</a
      >.
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
};
</script>

<style scoped>
.btn {
  padding-top: 0 !important;
}
.search {
  background: white;
  height: 40px;
  border-radius: 40px;
  padding: 0 10px;
}

.search:hover > .search-btn {
  background: white;
}
.search-btn {
  color: black;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: wheat;
  font-size: 16px;
  transition: ease-in 0.4s;
  line-height: 40px;
  width: 100%;
}
.fas fa-search {
  font-weight: 200;
  font-size: 40px;
}
.go {
  text-align: center;
  height: 40px;
  border-radius: 40px;
  margin-left: 10px;
  font-weight: bold;
}
</style>