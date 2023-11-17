import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackdropContainer = styled(motion.div)`
  position: fixed;
  left: 2.5vw;
  top: 5vh;
  bottom: 5vh;
  right: 2.5vw;
  height: 90vh;
  width: 95vw;
  background-color: #1D1E22;
  border-radius: 3.125rem;
  border: 2px solid #3DBDA780;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  z-index: 1000;
`;

interface BackdropProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <BackdropContainer
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropContainer>
  );
};

export default Backdrop;
