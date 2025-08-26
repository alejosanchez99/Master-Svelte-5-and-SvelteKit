<script lang="ts">
  let userName = $state("");

  $inspect(userName);
</script>

<h1>Your username</h1>
<input type="text" bind:value={userName} />

<style>
  h1 {
    color: blue;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
</style>
