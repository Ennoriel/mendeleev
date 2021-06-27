import { writable } from 'svelte/store';

export const store = writable({
  display: "grid",
  type: undefined,
  phase: undefined,
  search: ""
});