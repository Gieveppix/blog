import { useUserStore } from "@/stores/user";

const handleLogInUser = (router, password, email) => {
  const loginuser = async () => {


    const post = {
      password: password.value,
      email: email.value,
    };
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(post),
    });

    const user = useUserStore();

    user.login(await res.json());

    router.push({ name: "Home" });
  };
  return loginuser;
};

export default handleLogInUser;
