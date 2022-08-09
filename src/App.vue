<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
background-color : #FFFFFF;
  background-image: url("./assets/bg-tablet-pattern.svg"),
    url("./assets/bg-tablet-pattern.svg");
  background-position: 110% -10%, -60% 70%;
  background-repeat: no-repeat, no-repeat;
  background-size: 750px, 750px;
}
@media only screen and (max-width: 600px) {
  #app {
    background-image: url("./assets/bg-tablet-pattern.svg"),
      url("./assets/bg-tablet-pattern.svg");
    background-position: 50px -10%, 150px 25%;
    background-repeat: no-repeat, no-repeat;
    background-size: 650px, 350px;
  }
}
</style>
