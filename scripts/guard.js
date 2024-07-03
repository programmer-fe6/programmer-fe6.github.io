try {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");

  if (user._id) {
    window.dataLayer.push({ event: "userData", user_id: user._id });
  } else {
    throw new Error("Invalid User ID!");
  }
} catch (error) {
  /**
   * If there is an error, go back to login page.
   */
  location.href = "/";
}
