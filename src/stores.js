import { writable } from 'svelte/store';

const testTeacherSelections = {
  1: {
    title: 'set 1',
    selection: [301, 302, 303, 304, 305]
  },
  2: {
    title: 'set 2',
    selection: [301, 321, 324, 350]
  }
};

const testPlaces = {
  0: 301,
  1: 305,
  2: 330,
  3: 341,
  4: 307,
  5: 310,
  16: 350,
  21: 343
};

const createWritableStore = (key, initialValue) => {
  const { subscribe, set } = writable(initialValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe(current => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    },
    clean: () => {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  };
};

export const places = createWritableStore('places', {});

export const teacherSelection = createWritableStore('teacherSelection', {});
