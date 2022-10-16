import './Modal.css';

export default function Modal({children, showModal}) {
  return (
    <div>
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={()=> showModal(false)}>Close</button>
            </div>
        </div>
    </div>
  )
}
