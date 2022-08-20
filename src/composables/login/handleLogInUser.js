const handleLogInUser = (router, password, email) => {
  const loginuser = async () => {
    const post = {
      password: password.value,
      email: email.value,
    };
    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });
    router.push({ name: "Home" });
  };
  return loginuser;
};

export default handleLogInUser;
