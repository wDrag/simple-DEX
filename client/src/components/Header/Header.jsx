import "./Header.scss";
import Logo from "../../assets/angler-fish.svg";
import Eth from "../../assets/eth.svg";
import useSelectedPage from "./hooks/useSelectedPage";

const Header = () => {
  const { Page, changePage } = useSelectedPage();

  return (
    <div className="Header">
      <div className="Header__left">
        <img
          src={Logo}
          alt="Random logo"
          className="Logo"
          onClick={() => {
            changePage("");
          }}
        />
        <div
          className={`Header__item__container ${
            Page === "" ? "selected_Item" : ""
          }`}
          onClick={() => {
            changePage("");
          }}
        >
          <div className="Header__item">Swap</div>
        </div>
        <div
          className={`Header__item__container ${
            Page === "tokens" ? "selected_Item" : ""
          }`}
          onClick={() => {
            changePage("tokens");
          }}
        >
          <div className="Header__item">Tokens</div>
        </div>
      </div>
      <div className="Header__right">
        <div className="Header__right__chainName">
          <img
            src={Eth}
            alt="Ethereum"
            className="Header__right__chainName__icon"
          />
          <div className="Header__right__chainName__text">Ethereum</div>
        </div>
        <div className="Header__right__button">Connect</div>
      </div>
    </div>
  );
};

export default Header;
