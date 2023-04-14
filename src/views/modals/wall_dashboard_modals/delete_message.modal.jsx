/** React */
import React                        from "react";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { wallDashboardState }       from "../../../_actions/wall_dashboard.actions";

export default function DeleteMessageModal() {
    const dispatch = useDispatch();
    const { wall_dashboard: { selected_message_id }} = useSelector(state => state);

    const handleDeleteMessage = () => {
        dispatch(wallDashboardState.toggleDeleteMessageModal(false));
        dispatch(wallDashboardState.deleteMessage(selected_message_id));
    }

    return (
        <div className="modal">
            <div className="modal_content delete_message">
                <div className="modal_header">
                    <button onClick={() => {dispatch(wallDashboardState.toggleDeleteMessageModal(false))}} className="close_btn"></button>
                </div>
                <div className="modal_body">
                    <h2>Confirm Delete Message</h2>
                    <p>Are you sure you want to remove this message? <span></span> This action cannot be undone.</p>
                </div>
                <div className="modal_footer">
                    <button onClick={() => dispatch(wallDashboardState.toggleDeleteMessageModal(false))}  type="button" id="cancel_btn">Cancel</button>
                    <button type="button" onClick={() => handleDeleteMessage()} id="delete_comment_btn">Yes, Remove it.</button>
                </div>
            </div>
        </div>
    )
}
