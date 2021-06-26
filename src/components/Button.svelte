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
    padding: 8px 16px;
    border-radius: 8px;
    margin: 16px;
    font-weight: 100;
    font-size: 10px;
    transition: box-shadow .4s;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0 0 3px 1px var(--color-main);
  }
</style>