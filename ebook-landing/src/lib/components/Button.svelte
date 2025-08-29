<script lang="ts">
  import { PUBLIC_STRIPE_KEY } from "$env/static/public";
  import { loadStripe } from "@stripe/stripe-js";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Button = HTMLButtonAttributes & {
    children: Snippet;
  };

  const onclick = async () => {
    const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { sessionId } = await response.json();

    stripe?.redirectToCheckout({ sessionId });
  };

  let { children, ...props }: Button = $props();
</script>

<button {...props} {onclick}>
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
