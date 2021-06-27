<script>
  export let click
</script>

<button on:click={click}>
  <slot/>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-main);
    background-color: transparent;
    padding: 0 16px;
    height: 38px;
    border-radius: 8px;
    cursor: pointer;

    box-sizing: border-box;
  }

  @media(max-width: 600px) {
    button {
      font-size: 12px;
    }
  }

  button:hover {
    box-shadow: 0 0 0 2px var(--color-main);
  }
  button:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #0061df;
  }
</style>