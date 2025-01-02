<script lang="ts">
  import { onMount } from "svelte";
  import smile from "$lib/images/smile.png";
  import pokerFace from "$lib/images/poker-face.png";

  interface Task {
    text: string;
    done: boolean;
  }

  let tasks: Task[] = [
    { text: "Buy new sweatshirt", done: true },
    { text: "Read an article", done: true },
    { text: "Write blog post", done: false },
    { text: 'Watch "Mr Robot"', done: false },
    { text: "Run", done: false },
  ];

  let now = new Date();
  let weekday = now.toLocaleString("en-US", { weekday: "long" });
  let month = now.toLocaleString("en-US", { month: "long" });
  let dayNum = now.getDate();

  let taskListEl: HTMLUListElement | null = null;
  let taskInputEl: HTMLInputElement | null = null;
  function renderTasks(): void {
    if (!taskListEl) return;
    taskListEl.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.classList.add("flex", "items-center", "justify-between");
      if (task.done) {
        li.classList.add("line-through", "text-gray-400");
      }

      const textSpan = document.createElement("span");
      textSpan.textContent = task.text;

      const iconEl = document.createElement("img");
      iconEl.src = task.done ? smile : pokerFace;
      iconEl.classList.add("cursor-pointer", "w-6", "h-6");

      iconEl.addEventListener("click", () => {
        tasks[index].done = !tasks[index].done;
        renderTasks();
      });

      li.appendChild(textSpan);
      li.appendChild(iconEl);
      taskListEl?.appendChild(li);
    });
  }

  function addTask() {
    if (!taskInputEl) return;
    const text = taskInputEl.value.trim();
    if (text) {
      tasks.push({ text, done: false });
      taskInputEl.value = "";
      renderTasks();
    }
  }

  onMount(() => {
    taskListEl = document.getElementById("taskList") as HTMLUListElement;
    taskInputEl = document.getElementById("taskInput") as HTMLInputElement;

    const addBtnEl = document.getElementById("addBtn") as HTMLButtonElement;
    addBtnEl?.addEventListener("click", addTask);

    taskInputEl?.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        addTask();
      }
    });

    renderTasks();
  });
</script>

<svelte:head>
  <title>Section 1</title>
  <meta name="description" content="Section 1" />
</svelte:head>
<div class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="relative bg-white w-96 p-6 rounded shadow-md p-10 m-10">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-700">{month}</h1>
      <p class="text-gray-400 mb-4">{weekday}, {month} {dayNum}</p>
    </div>

    <hr />
    <ul id="taskList" class="my-4 space-y-2"></ul>
    <div class="flex items-center space-x-2">
      <input
        id="taskInput"
        type="text"
        placeholder="Add Task"
        class="flex-1 border border-gray-200 px-2 py-1 mb-6 focus:outline-none focus:border-gray-400"
      />
    </div>
    <button
      id="addBtn"
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-green-500 text-white px-8 py-1 rounded-full shadow hover:bg-green-600 transition"
    >
      Add
    </button>
  </div>
</div>
