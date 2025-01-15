/* eslint-disable react/prop-types */
import { Component } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const URL = "https://www.omdbapi.com/?apikey=90251c4f&s=";

class NetflixFilm extends Component {
  state = {
    search: [],
    isLoading: true,
    isError: false,
  };

  functionFilm = async (searchKey) => {
    try {
      this.setState({ isLoading: true, isError: false });
      const response = await fetch(URL + searchKey);
      if (response.ok) {
        const data = await response.json();
        if (data.Search) {
          const show = data.Search.slice(0, 6);
          this.setState({
            search: show,
            isLoading: false,
          });
        } else {
          console.log("Nessun risultato trovato.");
          this.setState({ isLoading: false });
        }
      } else {
        throw new Error("Errore nel recupero dati API");
      }
    } catch (error) {
      console.error("Errore:", error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    const { searchKey } = this.props;
    this.functionFilm(searchKey);
  }

  render() {
    const { search, isLoading, isError } = this.state;

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
              {search.map((film) => (
                <Col xs={4} lg={2} key={film.imdbID} className="mb-3 p-1">
                  <img
                    src={film.Poster}
                    alt={film.Title}
                    className="img-fluid h-100"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.4")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Row>
      </Container>
    );
  }
}

export default NetflixFilm;
