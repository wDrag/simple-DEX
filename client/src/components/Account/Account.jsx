import "./Account.scss";
import { useAccount, useBalance, useDisconnect } from "wagmi";

const Account = () => {
  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const { disconnect } = useDisconnect();

  const handleClick = () => {
    disconnect();
  };

  const { address } = useAccount();
  return (
    <div
      className="Account"
      onClick={() => {
        handleClick();
      }}
    >
      <div className="AccountAddress">{formatAddress(address)}</div>
    </div>
  );
};

export default Account;
