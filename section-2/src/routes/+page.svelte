<script lang="ts">
  let userName = $state("");

  const sendToDatabase = () => {
    console.log(userName);
  };

  $effect(() => {
    if (userName) {
      console.log(
        `I will send the name to the database, current username is ${userName}`
      );
    }
  });
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
