<script lang="ts">
  import type { IPet } from "env";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  export let pets: IPet[] = [];

  onMount(() => {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % pets.length;
    }, 4000);
  });
  let currentIndex = 0;
  $: pet = pets[currentIndex];
</script>

<div class="relative overflow-hidden" style="height: 400px; width: 100%">
  {#key pet.id}
    <img
      in:fade
      src={pet.picture.url}
      alt={pet.name}
      height={400}
      width="100%"
      class="rounded-md" />
    <div class="absolute bg-white p-3 bottom-0 right-0 opacity-80">
      <h3>{pet.name}</h3>
    </div>
  {/key}
</div>
