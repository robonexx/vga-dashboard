import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

import Backdrop from './Backdrop';

const ModalContainer = styled(motion.div)`
  width: 80%;
  height: 80%;
  padding: 2rem;
  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GlassBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.055);
  backdrop-filter: blur(3px);
  color: #dbdbdb;
`;

const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  top: 0;
  right: 0;
  padding: 0.25rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.225);
  color: rgba(48, 92, 74, 0.952);
  font-size: 2rem;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.55));
  box-shadow: inset -2px 2px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const dropIn = {
  hidden: {
    y: '0vh',
    x: '300px',
    scale: 0,
    opacity: 0,
  },
  visible: {
    y: '0',
    x: '0',
    scale: 1,
    opacity: '1',
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: [0.17, 0.67, 0.83, 0.67],
      type: 'spring',
      damping: 50,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};

interface ModalProps {
  handleClose: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ handleClose, content }) => {
  return (
    <Backdrop onClick={handleClose}>
      <ModalContainer
        drag
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <CloseButton onClick={handleClose}>
          <FiX />
        </CloseButton>
        <GlassBackground>{content}</GlassBackground>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
