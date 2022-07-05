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

export const arrayToCommaString = (array) => {
  if (array.length === 0) return null;
  return array.join(", ");
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

export const setPageFromParams = (params) => {
  return +params.get("page") || 0;
};

const allowedKeys = ["search", "house", "orderBy", "order", "ancestry"];

export const setFormDataFromParams = (params) => {
  const formData = new FormData();
  [...params.keys()].forEach((key) => {
    if (allowedKeys.includes(key)) formData.set(key, params.get(key));
  });
  return formData;
};

export const makeSearchReadyCharactersArray = (charactersArray) => {
  return charactersArray.map((character) => {
    return {
      ...character,
      searchString: (
        character.name +
        " " +
        character.alternate_names.join(" ") +
        " " +
        character.actor +
        " " +
        character.alternate_actors.join(" ")
      ).toUpperCase(),
    };
  });
};
