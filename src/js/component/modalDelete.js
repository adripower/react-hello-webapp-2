import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";


export const ModalDelete = ({ setModal, stateModal, contact }) => { 

    // console.log(stateModal.show);
    const { store, actions } = useContext(Context)
    // console.log(store.contactToDelete.id);

    function handleDelete() {
        actions.deleteContact(store.contactToDelete.id)
        setModal({ show: "none" })
    }


    return (
        <div>
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: stateModal.show }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Seguro, seguro?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => { setModal({ show: "none" }) }}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Estas seguro que lo quieres borrar para siempre! </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => { setModal({ show: "none" }) }}>Oh no!</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={handleDelete}
                            >
                                Si eso es !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

