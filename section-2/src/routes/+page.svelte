<script lang="ts">
  //   import UserInput from "$lib/components/UserInput.svelte";

  let peopleWaiting = $state(["1232", "23233", "23232 "]);
</script>

<h1>Waiting queue</h1>
{#snippet userInput(personId: string)}
  <li>ID for person waiting: {personId}</li>
{/snippet}

<ul>
  {#each peopleWaiting as person}
    {@render userInput(person)}
  {/each}
</ul>

<button onclick={() => peopleWaiting.push(new Date().getTime().toString())}>
  I'm waiting too!
</button>

<!-- <UserInput userName="Niklas">
  <h1>This is the stuff passed inside</h1>
</UserInput> -->
