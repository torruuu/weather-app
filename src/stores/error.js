import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
    state: () => ({
        error: false
    }),
    getters: {
        getError: (state) => {
            return () => {
                return state.error;
            }
        },
    },
    actions: {
        setError(value) {
          this.error = value;
        },
     },
});