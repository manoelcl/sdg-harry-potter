import { useRef, useState } from "react";
import "./index.css";

export const SearchBar = ({ initial, callback }) => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const formRef = useRef();

  const handleForm = (e) => {
    if (e?.currentTarget?.id === "search")
      e.currentTarget.value = e.currentTarget.value.toUpperCase();
    console.log(e?.currentTarget?.value);
    const data = new FormData(formRef.current);
    callback(data);
  };

  return (
    <form
      ref={formRef}
      className="search-bar"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        maxLength={20}
        autoComplete="off"
        type="search"
        name="search"
        id="search"
        value={initial.get("search") || ""}
        placeholder="Character or actor name"
        onChange={(e) => handleForm(e)}
      ></input>
      <label htmlFor="house">House:</label>
      <select
        onChange={(e) => handleForm(e)}
        name="house"
        value={initial.get("house") || ""}
        id="house"
      >
        <option value="">None</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
      <label htmlFor="orderBy">Order by:</label>
      <select
        value={initial.get("orderBy") || ""}
        onChange={(e) => handleForm(e)}
        name="orderBy"
        id="house"
      >
        <option value="">None</option>
        <option value="yearOfBirth">Year</option>
        <option value="name">Name</option>
      </select>
      <fieldset>
        <input
          type="radio"
          name="order"
          id="order_asc"
          value="asc"
          onChange={(e) => handleForm(e)}
          checked={initial.get("order") === "asc" ? "checked" : ""}
        />

        <label htmlFor="">Asc.</label>

        <input
          type="radio"
          name="order"
          id="order_desc"
          value="desc"
          onChange={(e) => handleForm(e)}
          checked={initial.get("order") === "desc" ? "checked" : ""}
        />
        <label htmlFor="">Desc.</label>
      </fieldset>
      <button onClick={() => setAdvancedSearch(!advancedSearch)}>
        {advancedSearch ? "Less" : "More"}
      </button>
      {advancedSearch ? (
        <>
          <br />
          <fieldset>
            <input type="" name="wizard" id="wizard" />
          </fieldset>
          <fieldset>
            <label htmlFor="ancestry">Ancestry</label>
            <select
              value={initial.get("ancestry") || ""}
              onChange={(e) => handleForm(e)}
              name="ancestry"
              id="ancestry"
            >
              <option value="">None</option>
              <option value="pure-blood">Pure-blood</option>
              <option value="half-blood">Half-blood</option>
              <option value="squib">Squib</option>
              <option value="muggle">Muggle</option>
            </select>
          </fieldset>
        </>
      ) : null}
    </form>
  );
};
