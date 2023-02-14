import { useState } from 'react';
import { createPortal } from 'react-dom';
import Container from '../container/Container';
import Form from '../modal/Form';

import Modal from '../modal/Modal';

function Header({ setDarkMode, darkMode }) {
  const styles = {
    backgroundColor: 'var(--primary)',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'var(--white)',
    alignItems: 'center',
    position: 'fixed',
    transition: 'background-color 1.5s ease-out, color 1.5s ease-in',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  };

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container style={styles}>
      <h1>Cost Manager</h1>
      <div style={buttonContainer}>
        <button onClick={() => setIsModalOpen(true)}>+ Add New</button>
        <button onClick={handleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      {isModalOpen &&
        createPortal(
          <Modal setIsModalOpen={setIsModalOpen}>
            <Form />
          </Modal>,
          document.getElementById('modal'),
        )}
    </Container>
  );
}

export default Header;
