import React, { useContext } from 'react'
import Modal from 'react-modal'
import { PortfolioContext } from '../components/layout'
import { FaTimes } from "react-icons/fa";


import modalPortfolioStyles from './modalPortfolio.module.scss';

const ModalPortfolio = () => {
    const { firstModalState, secondModalState, firstModalToggle, secondModalToggle } = useContext(PortfolioContext)
    
    return (
        <div>
            <Modal isOpen={firstModalState} onRequestClose={firstModalToggle} style={{
                overlay: {
                    backgroundColor: "gray",
                    background: "rgba(0, 0, 0, 0.8)",
                    transition: "opacity 0.4s ease-in-out"
                },
                content: {
                    background: 'white',
                    width: '50%',
                    height: '85%',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    margin: 'auto',
                    padding: '0',
                    borderRadius: '0px',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'auto',
                    border:'none'
                }
            }}>
                <div className={modalPortfolioStyles.firstImageContainer}></div>
                <div className={modalPortfolioStyles.textContainer}>
                    <h1>Move Your Heart</h1>
                    <p>마음을 치료하는 상담사, 무브유어하트</p>
                    <ul className={modalPortfolioStyles.techList}>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                    </ul>
                    <a href="https://www.moveurheart.com/"><button>사이트 방문하기</button></a>
                    <FaTimes onClick={firstModalToggle} className={modalPortfolioStyles.closeModal} />
                </div>
            </Modal>
            <Modal isOpen={secondModalState} onRequestClose={secondModalToggle} style={{
                overlay: {
                    backgroundColor: "gray",
                    background: "rgba(0, 0, 0, 0.8)",
                    transition: "opacity 0.4s ease-in-out",
                    zIndex: "3"
                },
                content: {
                    background: 'white',
                    width: '50%',
                    height: '85%',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    margin: 'auto',
                    padding: '0',
                    borderRadius: '0px',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'auto',
                    border:'none',
                    zIndex:'3'
                }
            }}>
                <div className={modalPortfolioStyles.secondImageContainer}></div>
                <div className={modalPortfolioStyles.textContainer}>
                    <h1>키워드 </h1>
                    <p>마음을 치료하는 상담사, 무브유어하트</p>
                    <ul className={modalPortfolioStyles.techList}>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                       <li>완전반응형</li>
                    </ul>
                    <FaTimes onClick={secondModalToggle} className={modalPortfolioStyles.closeModal} />
                </div>
            </Modal>

        </div>
    )
}

export default ModalPortfolio
