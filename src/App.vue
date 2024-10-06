<script setup></script>

<template>
  <main class="relative">
    <div class="bg-gray-200 rounded-bl-[5.5rem] rounded-br-[5.5rem]">
      <div class="p-12 grid grid-cols-2" id="navbar" ref="navbar">
        <div>
          <h1 class="font-medium text-xs">aurelio.theodhore@gmail.com</h1>
        </div>
        <div>
          <ul class="flex float-end">
            <li class="mr-2 font-semibold text-xs">About Me</li>
            <li class="mr-2 font-semibold text-xs">/</li>
            <li class="mr-2 font-semibold text-xs">Projects</li>
            <li class="mr-2 font-semibold text-xs">/</li>
            <li class="mr-2 font-semibold text-xs">FaQs</li>
          </ul>
        </div>
      </div>
      <div class="p-14 px-13 pt-0 grid grid-cols-2">
        <div>
          <h1 class="text-3xl font-bold pt-20" ref="headingSectionOne">
            Creating, Building, & Deploy <br />
            Your Website
          </h1>
          <h1 class="w-[80%] font-normal mt-6 mb-6" ref="subtextSectionOne">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </h1>
          <a
            href="#"
            class="bg-white font-semibold text-sm px-6 py-2 rounded-full"
            ref="learnMoreButtonSectionOne"
            >Learn More</a
          >
        </div>
        <div>
          <img
            src="./assets/img/mainvector.png"
            class="block mx-auto"
            width="450"
            height="450"
            alt=""
            ref="imageSectionOne"
          />
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-center font-semibold my-10" ref="headingSectionTwo">
        My Toolbox: Technoliges I Work With
      </h1>
      <div class="techImage flex items-center justify-center">
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 1.png"
          width="60"
          alt=""
          ref="sectionTwoImage1"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 2.png"
          width="69"
          alt=""
          ref="sectionTwoImage2"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 3.png"
          width="88"
          alt=""
          ref="sectionTwoImage3"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 4.png"
          width="66"
          alt=""
          ref="sectionTwoImage4"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 5.png"
          width="94"
          alt=""
          ref="sectionTwoImage5"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 6.png"
          width="72"
          alt=""
          ref="sectionTwoImage6"
        />
      </div>
    </div>

    <div class="bg-gray-200 py-24 pb-48 rounded-[5.5rem]">
      <img
        src="./assets/img/perintilan/rocket-logo.png"
        alt=""
        class="block mx-auto mb-4"
        width="70"
        height="70"
      />
      <h1 class="font-semibold text-4xl w-[50%] text-center block mx-auto">
        Crafting solutions with code, fueled by imagination.
      </h1>
      <div
        class="grid grid-cols-4 gap-10 border-t-[1px] border-gray-400 pt-14 mt-20 w-[80%] block mx-auto"
      >
        <div>
          <img class="mb-4" src="./assets/img/perintilan/img1.png" width="35" alt="" />
          <h1 class="font-semibold text-sm w-[45%]">Full-Stack Web Development</h1>
          <h1 class="text-xs mt-3">
            Building robust and scalable web application from front-end to back-end,
            ensuring a seamless user experience and high peformance.
          </h1>
        </div>
        <div>
          <img class="mb-4" src="./assets/img/perintilan/img2.png" width="35" alt="" />
          <h1 class="font-semibold text-sm">UI/UX Design</h1>
          <h1 class="text-xs mt-3">
            Designing intuitive and visually appealing interfaces that prioritize user
            experience, making websites not only functional but also enjoyable to use.
          </h1>
        </div>
        <div>
          <img class="mb-4" src="./assets/img/perintilan/img3.png" width="35" alt="" />
          <h1 class="font-semibold text-sm">Web Based Application</h1>
          <h1 class="text-xs mt-3">
            Creating responsive and dynamic web applications tailored to meet your
            business needs, ensuring cross-platform compability and user-centric design.
          </h1>
        </div>
        <div>
          <img class="mb-4" src="./assets/img/perintilan/img4.png" width="35" alt="" />
          <h1 class="font-semibold text-sm">Responsive Design</h1>
          <h1 class="text-xs mt-3">
            Crafting websites that look great and perform flawlessly on any device, from
            desktops to mobile phones, ensuring accessbility and ease to use.
          </h1>
        </div>
      </div>
    </div>

    <div class="py-16 pb-0">
      <img
        src="./assets/img/perintilan/eyes-emoji.png"
        alt=""
        class="block mx-auto mb-6"
        width="60"
        height="60"
      />
      <h1 class="text-center text-2xl font-bold">
        Have a vision? Let's make it a reality.
      </h1>
      <h1 class="text-center text-l font-semibold my-3 mb-8">
        "Driven by creativity, commited to quality."
      </h1>
      <div class="grid grid-cols-2 w-[25%] block mx-auto">
        <div>
          <button
            class="font-semibold bg-black text-white p-3 px-6 rounded-full block mx-auto"
          >
            Email me
          </button>
        </div>
        <div>
          <button class="font-semibold bg-[#D9D9D9] p-3 px-6 rounded-full block mx-auto">
            Whatsapp
          </button>
        </div>
      </div>
      <div class="mt-[15%] px-16 pb-9">
        <div class="grid grid-cols-2 border-t-[1.5px] border-[#9D9D9D] pt-9 pb-0">
          <div>
            <h1 class="text-sm">Github/LinkedIn/Instagram</h1>
          </div>
          <div>
            <h1 class="text-sm float-end">Theodhore - 2024 © All Right Reserved</h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  // Navbar Animation
  navbarAnimation,
  // Section 1 Animation
  headingSectionOneAnimation,
  subtextSectionOneAnimation,
  learnMoreButtonSectionOneAnimation,
  imageSectionOneAnimation,
  // Section 2 Animation
  headingSectionTwoAnimation,
  sectionTwoToolsOneAnimation,
  sectionTwoToolsTwoAnimation,
} from "@/utils/gsapAnimation";

export default {
  mounted() {
    // Section 1
    navbarAnimation(this.$refs.navbar);
    headingSectionOneAnimation(this.$refs.headingSectionOne);
    subtextSectionOneAnimation(this.$refs.subtextSectionOne);
    learnMoreButtonSectionOneAnimation(this.$refs.learnMoreButtonSectionOne);
    imageSectionOneAnimation(this.$refs.imageSectionOne);

    // Section 2
    headingSectionTwoAnimation(this.$refs.headingSectionTwo);
    sectionTwoToolsOneAnimation(this.$refs.sectionTwoImage1);
    sectionTwoToolsOneAnimation(this.$refs.sectionTwoImage2);
  },
};
</script>

<style></style>
