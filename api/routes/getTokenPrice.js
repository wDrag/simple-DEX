import Moralis from "moralis";

const getTokenPrice = async (req, res) => {
  const { query } = req;
  const resOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne,
  });

  const resTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo,
  });

  const tokenPrices = {
    tokenOne: resOne.raw.usdPrice,
    tokenTwo: resTwo.raw.usdPrice,
    ratio: resOne.raw.usdPrice / resTwo.raw.usdPrice,
  };

  res.status(200).json(tokenPrices);
};

export default getTokenPrice;
