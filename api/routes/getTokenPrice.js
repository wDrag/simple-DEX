const getTokenPrice = (req, res) => {
  return res.status(200).json({ price: 0.1 });
};
export default getTokenPrice;
