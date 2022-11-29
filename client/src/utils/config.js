const nodeEnv = {
  serverURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api"
      : "https://halil-portfolio-client.vercel.app/api",
};

export  {nodeEnv}