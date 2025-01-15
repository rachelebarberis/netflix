import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Spinner,
  Alert,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

const API_URL = "https://www.omdbapi.com/";
const API_TOKEN = "90251c4f";
const COMMENTS_API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        setIsLoading(false);
        setIsError(false);

        const response = await fetch(`${API_URL}?apikey=${API_TOKEN}&i=${id}`);
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
      }
    };

    const getComments = async () => {
      try {
        const response = await fetch(`${COMMENTS_API_URL}?movieId=${id}`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVhOWVmNTk3ZTI5ZjAwMTVjMmU2OWMiLCJpYXQiOjE3MzY3NzQ4NzksImV4cCI6MTczNzk4NDQ3OX0.4kD4PjijrCGJggPxjkThpqhDO33NvMQ7Zo4uzeA9M7s",
          },
        });
        if (response.ok) {
          const data = await response.json();
          const filteredComments = data.filter(
            (comment) => comment.elementId === id
          );
          setComments(filteredComments);
        } else {
          console.error("Errore nel recupero dei commenti.");
        }
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    getMovieData();
    getComments();
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

          <div className="mt-4 bg-dark">
            <h3>Commenti</h3>
            {comments.length > 0 ? (
              <ListGroup>
                {comments.map((comment, id) => (
                  <ListGroup.Item key={id} className="bg-dark text-white">
                    <strong>{comment.author}</strong>: {comment.comment}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>Non ci sono commenti per questo film.</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
