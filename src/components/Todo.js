import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo(props) {
    const [isModal, setIsModal] = useState(false);

    function deleteHandler() {
        setIsModal(true);
    }

    function closeModal() {
        setIsModal(false);
    }

    return(
        <div className="card">
            <h2 className="title">{props.title}</h2>
            <div className="actions">
                <button onClick={deleteHandler} className="btn">Delete</button>
            </div>
            {isModal ? <Modal onCancel={closeModal} onConfirm={closeModal} /> : null}
            {isModal ? <Backdrop onClick={closeModal}/> : null}
      </div>
    );
}

export default Todo;