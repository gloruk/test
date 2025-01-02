<script lang="ts">
	let activeTab = "branding";

	function updateUnderline(target: HTMLElement | null) {
		if (!target) return;

		const underline = document.querySelector(".underline") as HTMLElement;
		if (!underline) return;

		const parentRect = target.parentElement!.getBoundingClientRect();
		const targetRect = target.getBoundingClientRect();

		const offsetLeft = targetRect.left - parentRect.left;
		const width = targetRect.width - 40;

		underline.style.left = `${offsetLeft + 20}px`;
		underline.style.width = `${width}px`;
	}

	function handleClick(tab: string, e: MouseEvent) {
		e.preventDefault();
		activeTab = tab;

		const target = e.currentTarget as HTMLElement;
		updateUnderline(target);
	}

	function initUnderline() {
		const activeElement = document.querySelector(
			`a[data-tab="${activeTab}"]`,
		) as HTMLElement;

		updateUnderline(activeElement);
	}

	import { onMount } from "svelte";
	onMount(initUnderline);
</script>

<svelte:head>
	<title>Section 1</title>
	<meta name="description" content="Section 1" />
</svelte:head>

<div
	class="h-screen flex items-center justify-center bg-gradient-to-b from-[#010013] to-[#190033]"
>
	<nav class="relative flex space-x-12 text-xl sm:text-2xl">
		<div
			class="underline absolute bottom-0 h-1 bg-white rounded transition-all duration-300"
		></div>

		<a
			href="/"
			data-tab="animation"
			class="relative cursor-pointer transition-all duration-300 text-gray-400 hover:text-white mb-4"
			class:text-white={activeTab === "animation"}
			on:click={(e) => handleClick("animation", e)}
		>
			Animation
		</a>

		<a
			href="/"
			data-tab="branding"
			class="relative cursor-pointer transition-all duration-300 text-gray-400 hover:text-white mb-4"
			class:text-white={activeTab === "branding"}
			on:click={(e) => handleClick("branding", e)}
		>
			Branding
		</a>

		<a
			href="/"
			data-tab="illustration"
			class="relative cursor-pointer transition-all duration-300 text-gray-400 hover:text-white mb-4"
			class:text-white={activeTab === "illustration"}
			on:click={(e) => handleClick("illustration", e)}
		>
			Illustration
		</a>
	</nav>
</div>

<style>
</style>
