import { useState } from "react";
import TokenList from "../../../assets/tokenList.json";

const useTokens = () => {
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(TokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(TokenList[2]);

  const changeTokenOneAmount = (e) => {
    setTokenOneAmount(e.target.value);
  };

  const switchTokens = () => {
    const temp = tokenOne;
    setTokenOne(tokenTwo);
    console.log(tokenTwo.ticker);
    setTokenTwo(temp);
  };

  const modifyToken = (i, changeToken) => {
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    if (changeToken === 1) {
      setTokenOne(TokenList[i]);
    } else {
      setTokenTwo(TokenList[i]);
    }
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
  };
};

export default useTokens;
