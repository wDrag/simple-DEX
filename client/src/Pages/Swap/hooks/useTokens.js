import { useState } from "react";
import TokenList from "../../../assets/tokenList.json";
import axios from "axios";

const useTokens = () => {
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(TokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(TokenList[2]);
  const [priceRatio, setPriceRatio] = useState(null);

  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

  const changeTokenOneAmount = (e) => {
    setTokenOneAmount(e.target.value);
    setTokenTwoAmount(parseFloat((e.target.value * priceRatio).toFixed(4)));
  };

  const switchTokens = () => {
    const temp = tokenOne;
    setTokenOne(tokenTwo);
    setTokenTwo(temp);

    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    setPriceRatio(null);
  };

  const modifyToken = (i, changeToken) => {
    if (changeToken === 1) {
      if (tokenOne === TokenList[i]) {
        return;
      }
      if (tokenTwo === TokenList[i]) {
        switchTokens();
        return;
      }
      setTokenOne(TokenList[i]);
    } else {
      if (tokenTwo === TokenList[i]) {
        return;
      }
      if (tokenOne === TokenList[i]) {
        switchTokens();
        return;
      }
      setTokenTwo(TokenList[i]);
    }

    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    setPriceRatio(null);
  };

  const getTokenPrice = async (tokenOneAddress, tokenTwoAddress) => {
    const TokenPrices = await axios.get(`${API_ENDPOINT}/api/getTokenPrice`, {
      params: {
        addressOne: tokenOneAddress,
        addressTwo: tokenTwoAddress,
      },
    });

    setPriceRatio(TokenPrices.data.ratio);
  };

  return {
    tokenOneAmount,
    tokenTwoAmount,
    changeTokenOneAmount,
    setTokenOneAmount,
    setTokenTwoAmount,
    setTokenOne,
    setTokenTwo,
    tokenOne,
    tokenTwo,
    switchTokens,
    modifyToken,
    getTokenPrice,
    priceRatio,
  };
};

export default useTokens;
