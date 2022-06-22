const keys = {
    serverURL:
    //     "https://halil-portfolio-backend.herokuapp.com",
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://halil-portfolio-backend.herokuapp.com",
};

export default keys