<script lang="ts">
  import screen1 from "$lib/images/small_screen1.png";
  import screen2 from "$lib/images/small_screen2.png";
  import screenMain from "$lib/images/screen_main.jpg";
</script>

<div
  class="relative flex font-lato flex-wrap xxl:flex-nowrap items-stretch bg-[#F7EFE4] h-[calc(100vh-65px)] min-h-830"
>
  <div
    class="relative bg-[#f4e8d7] flex-1 min-w-800 min-h-700 px-16"
  >
    <img
      src={screenMain}
      alt="Main screen"
      class="absolute inset-0 h-full w-full object-cover object-top"
    />

    <div class="absolute top-8 md:left-12 text-sm font-bold">
      <button class="uppercase tracking-wider text-white">Menu</button>
    </div>

    <div class="absolute bottom-12 md:left-12 space-y-14">
      <div class="text-lg text-white flex flex-col">
        <span>Summer</span>
        <span>Collection</span>
        <span>2020</span>
      </div>
      <h1 class="text-12xl md:text-8xl font-styleScript leading-none text-white tracking-widest">
        Summer <br /> 2020
      </h1>
      <div class="flex space-x-4">
        <a href="/section3" class="uppercase text-white">FB</a>
        <a href="/section3" class="uppercase text-white">PIN</a>
        <a href="/section3" class="uppercase text-white">IG</a>
      </div>
    </div>

    <div
      class="absolute right-16 top-1/3 transform -translate-y-1/3 flex items-center space-x-4 text-lg text-white"
    >
      <a href="/section3" class="text-white">Previous</a>
      <div class="w-16 bg-white h-px"></div>
      <a href="/section3" class="text-white">Next</a>
    </div>
  </div>

  <div
    class="flex flex-col justify-between bg-[#F7EFE4] min-w-830  w-full xxl:min-w-600 xxl:w-600 w-full  pl-8 pb-8"
  >
    <div class="flex justify-end gap-4 mr-16 mt-6 mb-20">
      <div class="uppercase text-sm text-gray-500 font-black">ENG</div>
      <div class="uppercase text-sm text-gray-500">FR</div>
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-8 relative">
        <div class="ml-44 h-300 w-230">
          <img src={screen1} alt="screen1" />
        </div>
        <div class="flex gap-8">
          <div class="ml-10 w-225">
            <img src={screen2} alt="screen2" />
          </div>
          <button
            class="mt-60 px-4 py-2 h-16 w-200 border border-black text-black uppercase tracking-wider bg-transparent"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div
        class="flex justify-start text-sm top-1/2 text-black rotate-90 whitespace-nowrap w-1 origin-top-left"
      >
        <span>Ref: 66817787</span>
        <span class="inline-block mx-8 mr-8">────────</span>
        <span>White loose dress</span>
      </div>
    </div>
  </div>
</div>

<style global>
  * {
    /* font-family: "Lato", sans-serif !important; */
  }
</style>
