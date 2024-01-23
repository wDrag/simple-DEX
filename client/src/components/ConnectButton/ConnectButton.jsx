import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import "./ConnectButton.scss";

const ConnectButton = () => {
  const { connect } = useConnect();

  const handleClick = () => {
    try {
      connect({ connector: injected() });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="connect-button" onClick={handleClick}>
      Connect
    </div>
  );
};

export default ConnectButton;
