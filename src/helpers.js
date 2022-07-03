export const clamp = (current, min, max) =>
  Math.min(Math.max(current, min), max);

export const getFromLocalStorage = (itemName) => {
  try {
    const jsonData = localStorage.getItem(itemName);
    return JSON.parse(jsonData);
  } catch (err) {
    deleteLocalStorage(itemName);
    console.log(err);
  }
};

export const setIntoLocalStorage = (itemName, data) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(itemName, jsonData);
};

export const deleteLocalStorage = (itemName) => {
  localStorage.removeItem(itemName);
};

export const colorDictionary = {
  Gryffindor: {
    backgroundImage:
      "linear-gradient(90deg,    transparent,    var(--color-gryffindor-red) 30%,    var(--color-gryffindor-red) 70%, transparent)",
  },
  Slytherin: {
    backgroundImage:
      "linear-gradient(90deg,    transparent,    var(--color-slytherin-green) 30%,    var(--color-slytherin-green) 70%, transparent)",
  },
  Ravenclaw: {
    backgroundImage:
      "linear-gradient(90deg,    transparent,    var(--color-ravenclaw-blue) 30%,    var(--color-ravenclaw-blue) 70%, transparent)",
  },
  Hufflepuff: {
    backgroundImage:
      "linear-gradient(90deg,    transparent,    var(--color-hufflepuff-yellow) 30%,    var(--color-hufflepuff-yellow) 70%, transparent)",
  },
};
