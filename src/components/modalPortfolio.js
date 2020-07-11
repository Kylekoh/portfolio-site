import React, { useContext } from "react"
import Modal from "react-modal"
import { PortfolioContext } from "../components/layout"
import { FaTimes, FaGithub } from "react-icons/fa"

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
    <div className={modalPortfolioStyles.modalContainer}>
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
          <div className={modalPortfolioStyles.textHeader}>
            <h1>Football-Stat</h1>
            <p>
              - 해외축구 각 리그별 순위 및 팀별 정보 데이터를 제공하는 웹사이트
              입니다
            </p>
            <p>- Redux, React Hooks를 활용하여 데이터 상태를 관리했습니다</p>
            <p>- Redux, Redux-Thunk를 통한 API 호출 기능 개발하였습니다</p>
            <p>- API-FOOTBALL의 API 데이터를 활용하였습니다</p>
            <p>- 반응형 디자인, Material UI 테이블 디자인을 적용하였습니다</p>
          </div>
          <ul className={modalPortfolioStyles.techList}>
            <li>React</li>
            <li>React Hooks</li>
            <li>Redux</li>
            <li>Redux-Thunk</li>
            <li>CSS-in-JS</li>
          </ul>
          <div className={modalPortfolioStyles.siteButton}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://kylekoh.github.io/football-stat/"
            >
              <button>사이트 방문하기</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kylekoh/football-stat"
              className={modalPortfolioStyles.codeButton}
            >
              <button>
                <FaGithub /> <span>Github</span>
              </button>
            </a>
          </div>
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
          <div className={modalPortfolioStyles.textHeader}>
            <h1>Keyword Collector</h1>
            <p>
              - 키워드별 검색량, 성별검색비율, 컨텐츠 발행량, 연령별 검색비율,
              월별검색동향 등의 데이터를 제공합니다
            </p>
            <p>- Electron기반의 데스크탑 어플리케이션 입니다</p>
            <p>
              - 프로젝트를 위해 Frontend는 ReactJS, Backend는 NodeJS를
              사용하였습니다.
            </p>
            <p>- 네이버 검색 API, 크롤링 활용하여 데이터를 수집하였습니다</p>
            <p>- 데이터 grid 표현을 위해 ag-grid를 활용하였습니다.</p>
          </div>
          <ul className={modalPortfolioStyles.techList}>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Electron</li>
            <li>크롤링</li>
          </ul>
          <div className={modalPortfolioStyles.siteButton}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kylekoh/keyword_collector"
            >
              <button>
                <FaGithub /> <span>Github</span>
              </button>
            </a>
          </div>
          <FaTimes
            onClick={secondModalToggle}
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
          <div className={modalPortfolioStyles.textHeader}>
            <h1>Move Your Heart</h1>
            <p>- 예술심리치유센터 무브유어하트 랜딩페이지입니다</p>
            <p>- 반응형 홈페이지, 웹사이트 최적화를 적용하였습니다</p>
            <p>- 이미지 슬라이딩, 헤더 스크롤 이벤트 적용하였습니다 </p>
          </div>
          <ul className={modalPortfolioStyles.techList}>
            <li>React</li>
            <li>반응형 디자인</li>
          </ul>
          <div className={modalPortfolioStyles.siteButton}>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.moveurheart.com/"
            >
              <button>사이트 방문하기</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kylekoh/MoveURHeart"
              className={modalPortfolioStyles.codeButton}
            >
              <button>
                <FaGithub /> <span>Github</span>
              </button>
            </a>
          </div>
          <FaTimes
            onClick={thirdModalToggle}
            className={modalPortfolioStyles.closeModal}
          />
        </div>
      </Modal>
    </div>
  )
}

export default ModalPortfolio
