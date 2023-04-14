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
    let [toggle_update_comment, setToggleUpdateComment] = useState(true); 
    let [update_comment_field, setUpdateCommentField] = useState([]);
    const dispatch = useDispatch();

    const onSubmitUpdateComment = (event) => {
        event.preventDefault();

        dispatch(wallDashboardState.updateComment({
            message_id: message_id, 
            comment_id: comment_item.id, 
            updated_comment: update_comment_field[0]?.value
        }));
        
        setToggleUpdateComment(!toggle_update_comment);
    }

    const showDeleteCommentModal = () => {
        dispatch(wallDashboardState.toggleDeleteCommentModal(true));
        dispatch(wallDashboardState.setSelectedCommentId(comment_item.id));
        dispatch(wallDashboardState.setSelectedMessageId(message_id));
    }

    const CommentItem = () => {
        return (
            <div>
                <p className="comment_text">{comment_item.comment}</p>
                <ul className="action_controls">
                    <li 
                        className="edit_btn"
                        onClick={() => setToggleUpdateComment(!toggle_update_comment)} 
                        > Edit
                    </li>
                    <li 
                        className="delete_btn"
                        onClick={() => showDeleteCommentModal()} 
                        > Delete
                    </li>
                    <li className="profile_btn">
                        <span>You</span> - few seconds ago
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <li className="comment_item">
            {toggle_update_comment
                ?   <CommentItem/>
               :    <form id="update_comment_form" onSubmit={onSubmitUpdateComment} method="POST">
                        <textarea 
                            onChange={(event) => setFieldValue(setUpdateCommentField, "update_comment_field", event.target.value)} 
                            defaultValue={toggle_update_comment ? " " : comment_item.comment}
                        >
                        </textarea>
                        <button 
                            type="button" 
                            className="cancel_btn"
                            onClick={() => setToggleUpdateComment(!toggle_update_comment)} 
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
