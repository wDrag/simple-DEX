import "./Swap.scss";
import {
  SettingOutlined,
  DownOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Popover, Radio, Input, Modal } from "antd";
import useSlippage from "./hooks/useSlippage";
import useTokens from "./hooks/useTokens";
import TokenList from "../../assets/tokenList.json";
import useModal from "./hooks/useModal";

const Swap = () => {
  const { slippage, changeSlippage } = useSlippage();
  const {
    tokenOneAmount,
    tokenTwoAmount,
    changeTokenOneAmount,
    tokenOne,
    tokenTwo,
    switchTokens,
    modifyToken,
  } = useTokens();

  const { isOpen, closeModal, openModal, changeToken } = useModal();

  const settings = (
    <div>
      <span className="popover-content-text">Slippage Tolerance</span>
      <div>
        <Radio.Group
          value={slippage}
          onChange={changeSlippage}
          buttonStyle="solid"
        >
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}> 5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );

  return (
    <div className="Swap">
      <Modal
        open={isOpen}
        title="Select a token"
        footer={null}
        onCancel={() => {
          closeModal();
        }}
      >
        <div className="modalContent__tokens">
          {TokenList?.map((token, index) => {
            return (
              <div
                className="modalContent__token"
                key={index}
                onClick={() => {
                  modifyToken(index, changeToken);
                  closeModal();
                }}
              >
                <img
                  src={token.img}
                  alt="tokenLogo"
                  className="modalContent__token__logo"
                />
                <span className="modalContent__token__info">
                  <div className="modalContent__token__info__name">
                    {/* name */}
                    {token.name}
                  </div>
                  <div className="modalContent__token__info__ticker">
                    {/* ticker */}
                    {token.ticker}
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="SwapBox">
        <div className="SwapBox__header">
          <h3 className="SwapBox__header__text">Swap</h3>
          <Popover
            title="Settings"
            content={settings}
            trigger="click"
            placement="bottomRight"
            arrow=""
          >
            <div className="cog_container">
              <SettingOutlined className="SwapBox__header__cog" />
            </div>
          </Popover>
        </div>
        <div className="SwapBox__input">
          <Input
            placeholder="0"
            value={tokenOneAmount}
            onChange={changeTokenOneAmount}
            className="inputField"
          />
          <div
            className="asset assetOne"
            onClick={() => {
              openModal(1);
            }}
          >
            <img src={tokenOne.img} alt="tokenOneLogo" className="tokenLogo" />
            <span className="tokenName">{tokenOne.ticker}</span>
            <DownOutlined className="downOutlined" />
          </div>

          <div
            className="switchBtn"
            onClick={() => {
              switchTokens();
            }}
          >
            <ArrowDownOutlined />
          </div>

          <Input
            placeholder="0"
            value={tokenTwoAmount}
            disabled={true}
            className="inputField"
          />
          <div
            className="asset assetTwo"
            onClick={() => {
              openModal(2);
            }}
          >
            <img src={tokenTwo.img} alt="tokenOneLogo" className="tokenLogo" />
            <span className="tokenName">{tokenTwo.ticker}</span>
            <DownOutlined className="downOutlined" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
