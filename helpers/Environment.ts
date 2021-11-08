const isEnvironmentLoaded = () => {
  const { DB_NAME, DB_USER, DB_HOST, PORT } = process.env;

  if (DB_NAME && DB_USER && DB_HOST && PORT) {
    return true;
  }

  return false;
};

export { isEnvironmentLoaded };
