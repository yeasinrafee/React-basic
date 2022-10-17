import './Modal.css';
import ReactDom from 'react-dom';

export default function Modal({children, showModal}) {
  return ReactDom.createPortal((
    <div>
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "3px solid",
                borderColor: "#000",
                textAlign: "center",
            }}>
                {children}
                <button onClick={()=> showModal(false)}>Close</button>
            </div>
        </div>
    </div>
  ), document.body);
}
