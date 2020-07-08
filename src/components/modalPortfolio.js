import React, { useContext } from "react"
import Modal from "react-modal"
import { PortfolioContext } from "../components/layout"
import { FaTimes } from "react-icons/fa"

import modalPortfolioStyles from "./modalPortfolio.module.scss"

const ModalPortfolio = () => {
  const {
    firstModalState,
    secondModalState,
    thirdModalState,
    firstModalToggle,
    secondModalToggle,
    thirdModalToggle,
  } = useContext(PortfolioContext)

  return (
    <div>
      <Modal
        className={modalPortfolioStyles.modal}
        isOpen={firstModalState}
        onRequestClose={firstModalToggle}
        style={{
          overlay: {
            backgroundColor: "gray",
            background: "rgba(0, 0, 0, 0.8)",
            transition: "opacity 0.4s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "3",
          },
        }}
      >
        <div className={modalPortfolioStyles.firstImageContainer}></div>
        <div className={modalPortfolioStyles.textContainer}>
          <h1>Football-Stat</h1>
          <p>API 호출 기능 개발</p>
          <ul className={modalPortfolioStyles.techList}>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>React Hooks</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>Redux-Thunk</span>
            </li>
            <li>
              <span>Styled-Components</span>
            </li>
          </ul>
          <a target="_blank" href="https://kylekoh.github.io/football-stat/">
            <button>사이트 방문하기</button>
          </a>
          <a target="_blank" href="https://kylekoh.github.io/football-stat/">
            <button>소스코드</button>
          </a>
          <FaTimes
            onClick={firstModalToggle}
            className={modalPortfolioStyles.closeModal}
          />
        </div>
      </Modal>
      <Modal
        className={modalPortfolioStyles.modal}
        isOpen={secondModalState}
        onRequestClose={secondModalToggle}
        style={{
          overlay: {
            backgroundColor: "gray",
            background: "rgba(0, 0, 0, 0.8)",
            transition: "opacity 0.4s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "3",
          },
        }}
      >
        <div className={modalPortfolioStyles.secondImageContainer}></div>
        <div className={modalPortfolioStyles.textContainer}>
          <h1>Football-Stat</h1>
          <p>API 호출 기능 개발</p>
          <ul className={modalPortfolioStyles.techList}>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>React Hooks</span>
            </li>
            <li>
              <span>Redux</span>
            </li>
            <li>
              <span>Redux-Thunk</span>
            </li>
            <li>
              <span>Styled-Components</span>
            </li>
          </ul>
          <a target="_blank" href="https://kylekoh.github.io/football-stat/">
            <button>사이트 방문하기</button>
          </a>
          <FaTimes
            onClick={firstModalToggle}
            className={modalPortfolioStyles.closeModal}
          />
        </div>
      </Modal>
      <Modal
        className={modalPortfolioStyles.modal}
        isOpen={thirdModalState}
        onRequestClose={thirdModalToggle}
        style={{
          overlay: {
            backgroundColor: "gray",
            background: "rgba(0, 0, 0, 0.8)",
            transition: "opacity 0.4s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "3",
          },
        }}
      >
        <div className={modalPortfolioStyles.thirdImageContainer}></div>
        <div className={modalPortfolioStyles.textContainer}>
          <h1>Move Your Heart</h1>
          <p>예술심리치유센터 무브유어하트 랜딩페이지</p>
          <ul className={modalPortfolioStyles.techList}>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Responsive Design</span>
            </li>
            <li>
              <span>웹페이지 최적화</span>
            </li>
          </ul>
          <a target="_blank" href="http://www.moveurheart.com/">
            <button>사이트 방문하기</button>
          </a>
          <FaTimes
            onClick={firstModalToggle}
            className={modalPortfolioStyles.closeModal}
          />
        </div>
      </Modal>
    </div>
  )
}

export default ModalPortfolio
