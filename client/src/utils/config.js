const nodeEnv = {
  serverURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api"
      : "https://portfolio-halil-server-jiudcl1b9-halilesmer.vercel.app/api",
    };
    
    export  {nodeEnv}
    // : "https://halil-portfolio-client.vercel.app/api",
    // : "https://halil-portfolio-backend.herokuapp.com",