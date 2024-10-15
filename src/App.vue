<script setup></script>

<template>
  <main class="relative">
    <div class="bg-gray-200 rounded-bl-[5.5rem] rounded-br-[5.5rem]">
      <div
        class="p-6 md:p-12 grid grid-cols-2"
        id="navbar"
        v-motion-slide-visible-once-top
        :duration="900"
      >
        <div>
          <h1 class="font-medium text-xs">aurelio.theodhore@gmail.com</h1>
        </div>
        <div>
          <ul class="flex justify-end space-x-2">
            <li class="font-semibold text-xs">About Me</li>
            <li class="font-semibold text-xs">/</li>
            <li class="font-semibold text-xs">Projects</li>
            <li class="font-semibold text-xs">/</li>
            <li class="font-semibold text-xs">FaQs</li>
          </ul>
        </div>
      </div>
      <div class="p-6 md:p-14 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1
            class="text-3xl font-bold pt-0 md:pt-20 lg:pt-20"
            ref="headingSectionOne"
            v-motion-slide-visible-once-top
            :delay="500"
            :duration="960"
          >
            Creating, Building, & Deploy <br />
            Your Website
          </h1>
          <h1
            class="w-full md:w-[80%] font-normal mt-6 mb-6"
            ref="subtextSectionOne"
            v-motion-slide-visible-once-top
            :delay="600"
            :duration="960"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </h1>
          <button
            href="#"
            class="bg-white font-semibold text-sm px-6 py-2 rounded-full"
            ref="learnMoreButtonSectionOne"
            v-motion-slide-visible-once-top
            :delay="720"
            :duration="960"
          >
            Learn More
          </button>
        </div>
        <div>
          <img
            src="./assets/img/mainvector.png"
            class="block mx-auto hidden lg:block md:block"
            width="450"
            height="450"
            alt=""
            ref="imageSectionOne"
            v-motion-pop-visible-once
            :duration="900"
          />
        </div>
      </div>
    </div>

    <div>
      <h1
        class="text-center font-semibold my-10"
        ref="headingSectionTwo"
        v-motion-slide-visible-once-top
        :delay="200"
        :duration="960"
      >
        My Toolbox: Technologies I Work With
      </h1>
      <div class="flex flex-wrap items-center justify-center">
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 1.png"
          width="60"
          alt=""
          ref="sectionTwoImage1"
          v-motion-pop-visible-once
          :duration="500"
          :delay="100"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 2.png"
          width="69"
          alt=""
          ref="sectionTwoImage2"
          v-motion-pop-visible-once
          :duration="500"
          :delay="200"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 3.png"
          width="88"
          alt=""
          ref="sectionTwoImage3"
          v-motion-pop-visible-once
          :duration="500"
          :delay="300"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 4.png"
          width="66"
          alt=""
          ref="sectionTwoImage4"
          v-motion-pop-visible-once
          :duration="500"
          :delay="400"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 5.png"
          width="94"
          alt=""
          ref="sectionTwoImage5"
          v-motion-pop-visible-once
          :duration="500"
          :delay="500"
        />
        <img
          class="mx-10 mb-14"
          src="./assets/img/image 6.png"
          width="72"
          alt=""
          ref="sectionTwoImage6"
          v-motion-pop-visible-once
          :duration="500"
          :delay="600"
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
        v-motion-slide-visible-once-top
        :duration="900"
        :delay="100"
      />
      <h1
        class="font-semibold text-4xl w-full md:w-[50%] text-center block mx-auto"
        v-motion-slide-visible-once-top
        :duration="900"
        :delay="220"
      >
        Crafting solutions with code, fueled by imagination.
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t-[1px] border-gray-400 pt-14 mt-20 w-[80%] mx-auto"
      >
        <div>
          <img
            class="mb-4"
            src="./assets/img/perintilan/img1.png"
            width="35"
            alt=""
            v-motion-pop-visible-once
            :duration="600"
            :delay="100"
          />
          <h1
            class="font-semibold text-sm w-full"
            v-motion-slide-visible-once-bottom
            :duration="960"
            :delay="100"
          >
            Full-Stack Web Development
          </h1>
          <h1
            class="text-xs mt-3"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="200"
          >
            Building robust and scalable web applications from front-end to back-end,
            ensuring a seamless user experience and high performance.
          </h1>
        </div>
        <div>
          <img
            class="mb-4"
            src="./assets/img/perintilan/img2.png"
            width="35"
            alt=""
            v-motion-pop-visible-once
            :duration="600"
            :delay="200"
          />
          <h1
            class="font-semibold text-sm"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="200"
          >
            UI/UX Design
          </h1>
          <h1
            class="text-xs mt-3"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="300"
          >
            Designing intuitive and visually appealing interfaces that prioritize user
            experience, making websites not only functional but also enjoyable to use.
          </h1>
        </div>
        <div>
          <img
            class="mb-4"
            src="./assets/img/perintilan/img3.png"
            width="35"
            alt=""
            v-motion-pop-visible-once
            :duration="600"
            :delay="300"
          />
          <h1
            class="font-semibold text-sm"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="300"
          >
            Web Based Application
          </h1>
          <h1
            class="text-xs mt-3"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="400"
          >
            Creating responsive and dynamic web applications tailored to meet your
            business needs, ensuring cross-platform compatibility and user-centric design.
          </h1>
        </div>
        <div>
          <img
            class="mb-4"
            src="./assets/img/perintilan/img4.png"
            width="35"
            alt=""
            v-motion-pop-visible-once
            :duration="600"
            :delay="400"
          />
          <h1
            class="font-semibold text-sm"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="400"
          >
            Responsive Design
          </h1>
          <h1
            class="text-xs mt-3"
            v-motion-slide-visible-bottom-once
            :duration="960"
            :delay="500"
          >
            Crafting websites that look great and perform flawlessly on any device, from
            desktops to mobile phones, ensuring accessibility and ease to use.
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
        v-motion-slide-visible-once-top
        :duration="960"
        :delay="100"
      />
      <h1
        class="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-2xl"
        v-motion-slide-visible-once-top
        :duration="960"
        :delay="200"
      >
        Have a vision? Let's make it a reality.
      </h1>

      <!-- <h1
        class="text-center text-2xl font-bold"
        v-motion-slide-visible-top
        :duration="960"
        :delay="200"
      >
        Have a vision? Let's make it a reality.
      </h1> -->
      <h1
        class="text-center font-semibold text-lg sm:text-xl md:text-2xl lg:text-lg my-3 mb-8"
        v-motion-slide-visible-once-top
        :duration="960"
        :delay="300"
      >
        "Driven by creativity, committed to quality."
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 w-full max-w-[400px] mx-auto">
        <div>
          <button
            class="font-semibold bg-black text-white p-3 px-6 rounded-full block mx-auto"
            v-motion-slide-visible-once-bottom
            :duration="960"
            :delay="150"
          >
            Email me
          </button>
        </div>
        <div>
          <button
            class="font-semibold bg-[#D9D9D9] p-3 px-6 rounded-full block mx-auto"
            v-motion-slide-visible-once-bottom
            :duration="960"
            :delay="150"
          >
            Whatsapps
          </button>
        </div>
      </div>
      <div class="mt-[15%] px-4 sm:px-16 pb-9">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 border-t-[1.5px] border-[#9D9D9D] pt-9 pb-0"
        >
          <div>
            <h1
              class="text-sm text-center sm:text-left"
              v-motion-fade-visible-once
              :duration="960"
              :delay="200"
            >
              Github/LinkedIn/Instagram
            </h1>
          </div>
          <div>
            <h1
              class="text-sm text-center sm:text-right"
              v-motion-fade-visible-once
              :duration="960"
              :delay="200"
            >
              Theodhore - 2024 © All Right Reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
