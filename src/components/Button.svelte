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
    transition: box-shadow .4s;
    cursor: pointer;

    box-sizing: border-box;
  }

  @media(max-width: 600px) {
    button {
      font-size: 12px;
    }
  }

  button:hover {
    box-shadow: 0 0 3px 1px var(--color-main);
  }
</style>