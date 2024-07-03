try {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");

  if (!user._id) {
    throw new Error("Invalid User ID!");
  }
} catch (error) {
  /**
   * If there is an error, go back to login page.
   */
  location.href = "/";
}
