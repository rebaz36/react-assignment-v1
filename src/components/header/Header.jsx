import { useState } from 'react';
import { createPortal } from 'react-dom';
import Container from '../container/Container';
import Form from '../modal/Form';

import Modal from '../modal/Modal';

function Header() {
  const styles = {
    backgroundColor: 'var(--primary)',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'var(--light)',
    alignItems: 'center',
    position: 'fixed',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container style={styles}>
      <h1>Cost Manager</h1>
      <button onClick={() => setIsModalOpen(true)}>+ Add New</button>
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
