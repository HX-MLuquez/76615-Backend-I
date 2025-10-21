function hashCheck(pass) {
  let status = false;
  const inputDataPorVerificar = pass;
  const hashTest = crypto.createHash("sha256");
  hashTest.update(inputDataPorVerificar);
  const passwordHasheadoPorVerificar = hashTest.digest("hex");

  if (passwordHasheadoPorVerificar === user1.passHash) {
    status = true;
  }
  return status;
}
