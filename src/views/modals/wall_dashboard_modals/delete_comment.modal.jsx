/** React */
import React                        from "react";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { wallDashboardState }       from "../../../_actions/wall_dashboard.actions";
/** CSS */
import "./modal.modules.less";

export default function DeleteCommentModal() {
    const dispatch = useDispatch();
    const { wall_dashboard: { 
            selected_comment_id,
            selected_message_id 
        }} = useSelector(state => state);

    const handleDeleteComment = () => {
        dispatch(wallDashboardState.deleteComment({
            message_id: selected_message_id,
            comment_id: selected_comment_id
        }));
        dispatch(wallDashboardState.toggleDeleteCommentModal(false));
    }

    return (
        <div className="modal">
            <div className="modal_content delete_comment">
                <div className="modal_header">
                    <button onClick={() => dispatch(wallDashboardState.toggleDeleteCommentModal(false))} className="close_btn"></button>
                </div>
                <div className="modal_body">
                    <h2>Confirm Delete Comment</h2>
                    <p>Are you sure you want to remove this comment? <span></span> This action cannot be undone.</p>
                </div>
                <div className="modal_footer">
                    <button onClick={() => dispatch(wallDashboardState.toggleDeleteCommentModal(false))}  type="button" id="cancel_btn">Cancel</button>
                    <button type="button" id="delete_message_btn" onClick={() => handleDeleteComment()}>Yes, Remove it.</button>
                </div>
             </div>
        </div>
    )
}
