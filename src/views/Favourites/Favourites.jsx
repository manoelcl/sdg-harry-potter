import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import PageSelector from "../../components/PageSelector";

import { LocalContext } from "../../context/Context";

export const Favourites = () => {
  const navigate = useNavigate();
  const { favourites } = useContext(LocalContext);
  const [page, setPage] = useState(0);

  return (
    <>
      <header>
        <div className="header-container">
          <Button callback={() => navigate(-1)} className="first">
            Back
          </Button>
          <h1>Wizarding Web</h1>
          <h2>Harry Potter characters search</h2>
        </div>
      </header>
      <main className="favourites-view">
        <h2>Favourites:</h2>
        {favourites.length > 0 ? (
          <CardList characterArray={favourites} page={page} />
        ) : (
          <div className="card-list">
            <h2>You have not favourites</h2>
          </div>
        )}
        <PageSelector
          page={page}
          length={favourites.length}
          callback={setPage}
        />
      </main>
      <Footer />
    </>
  );
};
