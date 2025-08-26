<script lang="ts">
  let number = $state(0);
  //   let userInformation = $derived(
  //     number === 0
  //       ? "Hey why don't you try clicking on the button?"
  //       : `you've clicked ${number} times`
  //   );

  const calculateUserInformation = (number: number) => {
    if (number === 0) {
      return "Hey why don't you try clicking on the button?";
    }

    if (number === 1) {
      return "you've clicked one times";
    }

    return `you've clicked ${number} times`;
  };

  let userInformation = $derived.by(() => calculateUserInformation(number));

  const onclick = () => {
    number++;
  };
</script>

<button {onclick}> Click Me! </button>

<h1>{number}</h1>
<p>{userInformation}</p>
<div class="container">
  <p>This is the left side</p>
  <p>This is the right side</p>
</div>

<style>
  h1 {
    color: blue;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
</style>
