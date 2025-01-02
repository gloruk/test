<script lang="ts">
  import logo from "$lib/images/bing.svg";
</script>

<svelte:head>
  <title>Section 2</title>
  <meta name="description" content="Section 2" />
</svelte:head>
<div class="relative h-screen flex items-center justify-center overflow-hidden">
  <div
    class="absolute inset-0 bg-gradient-to-tr from-white via-purple-200 to-blue-300"
  ></div>
  <div
    class="absolute inset-0 bg-gradient-to-tl from-white via-white to-cyan-200 mix-blend-multiply"
  ></div>

  <div
    class="relative flex flex-col items-center w-24 h-24 p-4 rounded-3xl bg-white drop-shadow-xl"
  >
    <img src={logo} alt="Bing icon" class="w-10 h-10 object-contain" />
    <span class="mt-1 text-gray-700 font-medium">Bing</span>
  </div>
</div>
