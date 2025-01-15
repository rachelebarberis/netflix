/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const URL = "https://www.omdbapi.com/?apikey=90251c4f&s=";

const NetflixFilm = ({ searchKey }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(URL + searchKey);
        if (response.ok) {
          const data = await response.json();
          if (data.Search) {
            setSearchResults(data.Search.slice(0, 6));
          } else {
            console.log("Nessun risultato trovato.");
          }
        } else {
          throw new Error("Errore nel recupero dati API");
        }
      } catch (error) {
        console.error("Errore:", error);
        setIsError(true);
      }
    };

    fetchFilms();
  }, [searchKey]);

  return (
    <Container fluid={true} className="bg-dark text-white py-4">
      <Row className="justify-content-center">
        <h2 className="text-secondary">Guarda Ora</h2>
        {isError && (
          <Alert variant="danger" className="w-100 text-center">
            Si è verificato un errore nel caricamento dei dati.
          </Alert>
        )}
        {isLoading ? (
          <div className="text-center my-4 w-100">
            <Spinner animation="border" variant="light" />
            <p>Caricamento in corso...</p>
          </div>
        ) : (
          <Row className="justify-content-center">
            {searchResults.map((film) => (
              <Col xs={4} lg={2} key={film.imdbID} className="mb-3 p-1">
                <Link to={`/movies/${film.imdbID}`}>
                  <img
                    src={film.Poster}
                    alt={film.Title}
                    className="img-fluid h-100"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.4")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default NetflixFilm;
