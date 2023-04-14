/** React */
import React, { useState }           from "react";
/** Redux */
import { useDispatch }               from "react-redux";
import { wallDashboardState }        from "../../../_actions/wall_dashboard.actions";
/** Helper */
import { setFieldValue, generateId } from "../../../_helpers/helper"
/** CSS */
import "./modal.modules.less";

 
export default function CreateMessageModal() {
    const dispatch = useDispatch();
    const [ new_message, setMessage] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(wallDashboardState.toggleCreateModal(false));
        dispatch(wallDashboardState.addMessage({
                id: generateId(),
                message: new_message[0].value,
                comment_list: []
            }));
    }

    return (
        <div className="modal">
            <div className="modal_content create_message">
                <form id="create_message_form" onSubmit={handleSubmit} method="POST">   
                    <div className="modal_header">
                        <button onClick={() => dispatch(wallDashboardState.toggleCreateModal(false))} className="close_btn"></button>
                    </div>
                    <div className="modal_body">
                        <h2>Create a Message</h2>
                        <textarea 
                            autoFocus
                            placeholder="Type your message here."
                            onChange={(event) => setFieldValue(setMessage, "message", event.target.value)}
                        ></textarea>
                    </div>
                    <div className="modal_footer">
                        <button 
                            id="cancel_btn"
                            onClick={() => dispatch(wallDashboardState.toggleCreateModal(false))}  
                            type="button" 
                        >Cancel
                        </button>
                        <button 
                            disabled={!new_message[0]?.value.length}
                            id="submit_create_msg_btn" 
                            type="submit" 
                        >Post Message
                        </button>
                    </div>
                </form>
             </div>
        </div>
    )
}
