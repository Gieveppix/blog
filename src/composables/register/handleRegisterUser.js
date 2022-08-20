const handleRegisterUser = (router, name, password, email) => {
  const registeruser = async () => {
    const post = {
      name: name.value,
      password: password.value,
      email: email.value,
    };
    await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    router.push({ name: "Home" });
  };
  return registeruser;
};

export default handleRegisterUser;
