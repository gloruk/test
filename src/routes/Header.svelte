<script lang="ts">
	import { page } from "$app/stores";
</script>

<header class="flex justify-between px-4 py-2">
	<nav class="flex items-center justify-center bg-white/70">
		<ul class="relative flex items-center justify-center h-12 list-none">
			<li
				class="relative h-full"
				aria-current={$page.url.pathname === "/" ? "page" : undefined}
			>
				<a
					href="/"
					class="flex h-full items-center px-3 text-sm font-bold uppercase tracking-wide no-underline text-gray-800 transition-colors duration-200 hover:text-blue-500"
					>Section 1</a
				>
			</li>
			<li
				class="relative h-full"
				aria-current={$page.url.pathname === "/section2"
					? "page"
					: undefined}
			>
				<a
					href="/section2"
					class="flex h-full items-center px-3 text-sm font-bold uppercase tracking-wide no-underline text-gray-800 transition-colors duration-200 hover:text-blue-500"
					>Section 2</a
				>
			</li>
			<li
				class="relative h-full"
				aria-current={$page.url.pathname === "/section3"
					? "page"
					: undefined}
			>
				<a
					href="/section3"
					class="flex h-full items-center px-3 text-sm font-bold uppercase tracking-wide no-underline text-gray-800 transition-colors duration-200 hover:text-blue-500"
					>Section 3</a
				>
			</li>
			<li
				class="relative h-full"
				aria-current={$page.url.pathname === "/section4"
					? "page"
					: undefined}
			>
				<a
					href="/section4"
					class="flex h-full items-center px-3 text-sm font-bold uppercase tracking-wide no-underline text-gray-800 transition-colors duration-200 hover:text-blue-500"
					>Section 4</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
	}
	li[aria-current="page"] a {
		color: rgb(59, 130, 246);
	}
</style>
