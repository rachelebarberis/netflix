import NetflixFilm from "./NetflixFilm";

const TvShow = () => {
  return (
    <>
      <NetflixFilm searchKey="Avengers" />
      <NetflixFilm searchKey="Indiana Jones" />
      <NetflixFilm searchKey="Harry Potter" />
    </>
  );
};

export default TvShow;
