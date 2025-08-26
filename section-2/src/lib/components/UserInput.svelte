<script lang="ts">
  import type { Snippet } from "svelte";

  type UserInput = {
    children: Snippet;
    userName: string;
  };
  let { userName, children }: UserInput = $props();
  $inspect(userName);
</script>

<h1>Your username</h1>
<input type="text" bind:value={userName} />
<p>userName</p>

{@render children()}

<style>
  h1 {
    color: blue;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
</style>
