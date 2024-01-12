import { useState } from "react";

const useSlippage = () => {
  const [slippage, setSlippage] = useState(0.5);

  const changeSlippage = (e) => {
    setSlippage(e.target.value);
  };

  return {
    slippage,
    changeSlippage,
  };
};

export default useSlippage;
