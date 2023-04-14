/** React */
import React, { useState }    from "react";
/** Redux */
import { useDispatch }        from "react-redux";
import { wallDashboardState } from "../../../_actions/wall_dashboard.actions";
/** Helper */
import { setFieldValue }      from "../../../_helpers/helper";
/** CSS */
import "./comment_list.component.less";

export default function CommentList({ comment_item, message_id}) {
    const [toggle_update_comment, setToggleUpdateComment] = useState(true); 
    const [update_comment_field, setUpdateCommentField] = useState([]);
    const dispatch = useDispatch();

    const handleUpdateComment = (event) => {
        event.preventDefault();
        dispatch(wallDashboardState.updateComment({
            message_id: message_id, 
            comment_id: comment_item.id, 
            updated_comment: update_comment_field[0]?.value
        }));
        setToggleUpdateComment(!toggle_update_comment);
    }

    const handleDeleteCommentModal = () => {
        dispatch(wallDashboardState.toggleDeleteCommentModal(true));
        dispatch(wallDashboardState.setSelectedCommentId(comment_item.id));
        dispatch(wallDashboardState.setSelectedMessageId(message_id));
    }

    return (
        <li className="comment_item">
            {toggle_update_comment
                ?   <div>
                        <p className="comment_text">{comment_item.comment}</p>
                        <ul className="action_controls">
                            <li 
                                onClick={() => setToggleUpdateComment(!toggle_update_comment)} 
                                className="edit_btn"
                                > Edit
                            </li>
                            <li 
                                onClick={() => handleDeleteCommentModal()} 
                                className="delete_btn"
                                > Delete
                            </li>
                            <li className="profile_btn">
                                <span>You</span> - few seconds ago
                            </li>
                        </ul>
                    </div>
                :   <form id="update_comment_form" onSubmit={handleUpdateComment} method="POST">
                        <textarea 
                            onChange={(event) => setFieldValue(setUpdateCommentField, "update_comment_field", event.target.value)} 
                            defaultValue={toggle_update_comment ? " " : comment_item.comment}
                        >
                        </textarea>
                        <button 
                            onClick={() => setToggleUpdateComment(!toggle_update_comment)} 
                            type="button" 
                            className="cancel_btn"
                            >Cancel
                        </button>
                        <button 
                            className="update_comment_btn" 
                            type="submit" 
                            disabled={!update_comment_field[0]?.value.length}
                            >Update Comment
                        </button>
                    </form>
            }
        </li>
    )
}
