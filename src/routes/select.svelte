<script lang="ts">
  export let options: {label: string, value: string}[] = [
    { label: "toto", value: "toto" },
    { label: "tutu", value: "tutu" }
  ]
</script>

<select>
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>

<style>
  select {
    height: 30px;
    width: 120px;
    border-radius: 5px;
    border: 1px solid #444;
  }

  option {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
</style>