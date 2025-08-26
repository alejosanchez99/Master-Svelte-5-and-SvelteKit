<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Button = HTMLButtonAttributes & {
    children: Snippet;
  };
  let { children, ...props }: Button = $props();
</script>

<button {...props}>
  {@render children()}
</button>

<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
