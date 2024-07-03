const login = () => {
  const username = document.querySelector("#username");

  localStorage.setItem(
    "user",
    JSON.stringify({
      _id: username.value,
    })
  );

  dataLayer.push({ event: "login", user_id: username.value });

  /**
   * Land to /dashboard after login.
   */
  location.href = "/dashboard";
};

const logout = () => {
  localStorage.removeItem("user");

  location.href = "/";
};
