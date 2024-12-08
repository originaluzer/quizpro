import React from 'react'

function Modal({ isOpen, text, onClose }) {
    if (!isOpen) return null; 

  return (    
<div id="modal" className="modal">  
  <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>QuizPro AI</h2>
        <p>{text}</p>
        <button onClick={onClose}>Close QuizPro Ai</button>
      </div>
    </div>
  

</div>
  )
}


const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    }
  };
export default Modal