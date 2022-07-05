import { useRef, useState } from "react";
import "./index.css";

export const SearchBar = ({ initial, callback }) => {
  const [advancedSearch, setAdvancedSearch] = useState(
    initial.get("advancedSearch") === "true" || false
  );

  const formRef = useRef();

  const handleForm = (e) => {
    if (e?.currentTarget?.id === "search")
      e.currentTarget.value = e.currentTarget.value.toUpperCase();
    const data = new FormData(formRef.current);
    if (advancedSearch) data.append("advancedSearch", "true");
    callback(data);
  };

  return (
    <form
      ref={formRef}
      className="search-bar"
      onSubmit={(e) => e.preventDefault()}
    >
      <fieldset className="main-field">
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
      </fieldset>

      {advancedSearch ? (
        <>
          <fieldset className="secondary-fields">
            <fieldset>
              <label htmlFor="ancestry">Ancestry: </label>
              <select
                value={initial.get("ancestry") || ""}
                onChange={(e) => handleForm(e)}
                name="ancestry"
                id="ancestry"
              >
                <option value="">None</option>
                <option value="pure-blood">Pure-blood</option>
                <option value="half-blood">Half-blood</option>
                <option value="muggleborn">Muggleborn</option>
                <option value="squib">Squib</option>
                <option value="muggle">Muggle</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="gender">Gender: </label>
              <select
                value={initial.get("gender") || ""}
                onChange={(e) => handleForm(e)}
                name="gender"
                id="gender"
              >
                <option value="">None</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="species">Species: </label>
              <select
                value={initial.get("species") || ""}
                onChange={(e) => handleForm(e)}
                name="species"
                id="species"
              >
                <option value="">None</option>
                <option value="human">Human</option>
                <option value="goblin">Goblin</option>
                <option value="centaur">Centaur</option>
                <option value="ghost">Ghost</option>
                <option value="half-giant">Half-giant</option>
                <option value="dragon">Dragon</option>
                <option value="acromantula">Acromantula</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="isAlive">Alive: </label>
              <select
                value={initial.get("isAlive") || ""}
                onChange={(e) => handleForm(e)}
                name="isAlive"
                id="isAlive"
              >
                <option value="">None</option>
                <option value="true">Alive</option>
                <option value="false">Not alive</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="isStaff">Staff: </label>
              <select
                value={initial.get("isStaff") || ""}
                onChange={(e) => handleForm(e)}
                name="isStaff"
                id="isStaff"
              >
                <option value="">None</option>
                <option value="true">Staff</option>
                <option value="false">Not staff</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="isStudent">Student: </label>
              <select
                value={initial.get("isStudent") || ""}
                onChange={(e) => handleForm(e)}
                name="isStudent"
                id="isStudent"
              >
                <option value="">None</option>
                <option value="true">Student</option>
                <option value="false">Not student</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="isWizard">Wizard: </label>
              <select
                value={initial.get("isWizard") || ""}
                onChange={(e) => handleForm(e)}
                name="isWizard"
                id="isWizard"
              >
                <option value="">None</option>
                <option value="true">Wizard</option>
                <option value="false">Not a wizard</option>
              </select>
            </fieldset>
          </fieldset>
        </>
      ) : null}
    </form>
  );
};
