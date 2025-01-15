import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert, Row, Col } from "react-bootstrap";

const URL = "https://www.omdbapi.com/";
const Token = "90251c4f";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${URL}?apikey=${Token}&i=${id}`);
        if (response.ok) {
          const data = await response.json();
          if (data.Response === "True") {
            setMovie(data);
          } else {
            console.error("Errore: Dettagli non trovati.");
            setIsError(true);
          }
        } else {
          throw new Error("Errore nel recupero dei dettagli del film");
        }
      } catch (error) {
        console.error("Errore:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieData();
  }, [id]);

  if (isLoading) {
    return (
      <Container className="text-center py-5 text-white">
        <Spinner animation="border" variant="light" />
        <p>Caricamento dettagli...</p>
      </Container>
    );
  }

  if (isError || !movie) {
    return (
      <Container className="text-center py-5 text-white">
        <Alert variant="danger">
          Errore nel caricamento dei dettagli del film.
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid={true} className="text-white py-5 bg-dark">
      <Row>
        <Col xs={12} md={4}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid mb-4 w-50"
          />
        </Col>
        <Col xs={12} md={8}>
          <h1>{movie.Title}</h1>
          <p>
            <strong>Anno:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genere:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Durata:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Regista:</strong> {movie.Director}
          </p>
          <p>
            <strong>Trama:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Attori:</strong> {movie.Actors}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
