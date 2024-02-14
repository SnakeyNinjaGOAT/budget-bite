export const test = (req, res) => {
  console.log("We here baby");
  res.json({
    message: "The API is working!!!",
  });
};
