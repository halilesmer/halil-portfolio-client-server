const nodeEnv = {
    serverURL:
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/api"
    : "https://halil-portfolio-backend.herokuapp.com",
};

export  {nodeEnv}