<template>
  <div>
    <div class="text-3xl mb-12 my-10 text-center font-bold text-darkBlue">
      What they’ve said
    </div>
    <div class="md:flex hidden">
      <div class="text-center person-card">
        <div class="">
          <img
            :src="person1"
            class="rounded-full m-auto w-16 h-16"
            alt="!sdf"
          />
        </div>
        <div><h1 class="text-darkBlue font-semibold">Anisha Li</h1></div>
        <div>
          <p class="md:px-10 md:py-5 px-5 py-3">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </div>
      <div class="text-center person-card mx-4">
        <div class="">
          <img
            :src="person2"
            class="rounded-full m-auto w-16 h-16"
            alt="!sdf"
          />
        </div>
        <div><h1 class="text-darkBlue font-semibold">Ali Bravo</h1></div>
        <div>
          <p class="md:px-10 md:py-5 px-5 py-3">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
      </div>
      <div class="text-center person-card">
        <div class="">
          <img
            :src="person3"
            class="rounded-full m-auto w-16 h-16"
            alt="!sdf"
          />
        </div>
        <div>
          <h1 class="text-darkBlue font-semibold">Richard Watts</h1>
        </div>
        <div>
          <p class="md:px-10 md:py-5 px-5 py-3">
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!” Shanai Gough
          </p>
        </div>
      </div>
    </div>

    <div class="md:hidden block">
      <carousel :paginationActiveColor="'#f25f3a'" :perPage="1">
        <slide>
          <div class="text-center person-card mx-4">
            <div class="">
              <img
                :src="person1"
                class="rounded-full m-auto w-16 h-16"
                alt="!sdf"
              />
            </div>
            <div><h1 class="text-darkBlue font-semibold">Anisha Li</h1></div>
            <div>
              <p class="md:px-10 md:py-5 px-5 py-3">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div></slide
        >
        <slide>
          <div class="text-center person-card mx-4">
            <div class="">
              <img
                :src="person2"
                class="rounded-full m-auto w-16 h-16"
                alt="!sdf"
              />
            </div>
            <div><h1 class="text-darkBlue font-semibold">Ali Bravo</h1></div>
            <div>
              <p class="md:px-10 md:py-5 px-5 py-3">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
          </div></slide
        >
        <slide>
          <div class="text-center person-card mx-4">
            <div class="">
              <img
                :src="person3"
                class="rounded-full m-auto w-16 h-16"
                alt="!sdf"
              />
            </div>
            <div>
              <h1 class="text-darkBlue font-semibold">Richard Watts</h1>
            </div>
            <div>
              <p class="md:px-10 md:py-5 px-5 py-3">
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!” Shanai Gough
              </p>
            </div>
          </div></slide
        >
      </carousel>
    </div>
    <div class="text-center md:my-36 my-4">
      <button class="btn shadow-md shadow-red">Get Started</button>
    </div>
  </div>
</template>

<script>
import person1 from "../assets/avatar-ali.png";
import person2 from "../assets/avatar-anisha.png";
import person3 from "../assets/avatar-richard.png";
import person4 from "../assets/avatar-shanai.png";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return { person1, person2, person3, person4 };
  },
};
</script>

<style>
.person-card {
  /* background-color: hsla(217, 32%, 92%, 0.281); */
  background-position: 0px 100%;
  background-image: linear-gradient(
    transparent 2rem,
    hsla(217, 32%, 92%, 0.281) 40px
  );
}
</style>