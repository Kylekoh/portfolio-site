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
                    // top: '120px',
                    // bottom: '120px',
                    // left: '250px',
                    // right: '250px'
                    background: 'white',
                    width: '50%',
                    height: '85%',
                    maxWidth: 'calc(100% - 60px)',
                    margin: 'auto',
                    padding: '0',
                    borderRadius: '0px',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'auto',
                    border:'none' 
                }
            }}>
                <div className={modalPortfolioStyles.imageContainer}></div>
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
                    <FaTimes onClick={secondModalToggle} className={modalPortfolioStyles.closeModal} />
                </div>
                
            </Modal>
            <Modal isOpen={secondModalState} onRequestClose={secondModalToggle}>
                <div className={modalPortfolioStyles.modalBackground}> 
                    이거 보이나? 두번째
                </div>
                <FaTimes onClick={secondModalToggle} />
            </Modal>
        </div>
    )
}

export default ModalPortfolio
