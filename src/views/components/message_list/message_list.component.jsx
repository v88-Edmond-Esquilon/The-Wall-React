/** React */
import React, { useState, useEffect }    from "react";
/** Component */
import { CommentList }        from "../";
/** Redux */
import {useDispatch }         from "react-redux";
import { wallDashboardState } from "../../../_actions/wall_dashboard.actions";
/** Helper */
import { setFieldValue }      from "../../../_helpers/helper";
/** CSS */
import "./message_list.component.less";

export default function MessageList({ message_item }) {
    let [toggle_message_update, setToggleMessageUpdate] = useState(false);
    let [toggle_comments, setToggleComments] = useState(false);
    let [update_message_field, setMessageField] = useState([]);
    let [comment_field, setCommentField] = useState([]);
    const dispatch = useDispatch();

    const onSubmitUpdateMessage = (event) => {
        event.preventDefault();
        setToggleMessageUpdate(false);

        dispatch(wallDashboardState.updateMessage({
            message_id: message_item.id,
            updated_message: update_message_field[0]?.value
        }));
    }

    const showDeleteMessageModal = () => {
        dispatch(wallDashboardState.toggleDeleteMessageModal(true));
        dispatch(wallDashboardState.setSelectedMessageId(message_item.id));
    }

    const onSubmitAddComment = (event) => {
        event.preventDefault();

        dispatch(wallDashboardState.addComment({
            message_id: message_item.id,
            comment: comment_field[0]?.value
        }));

        /** Reset Field after adding comment */
        setFieldValue(setCommentField, "comment_field", "");
    }

    const MessageItem = () => {
        return (
            <div>
                <p className="message_text">{message_item.message}</p>
                <ul className="action_controls">
                    <li 
                        onClick={() => setToggleComments(!toggle_comments)} 
                        className={message_item.comment_list.length? "active_add_btn" : "add_comment_btn"}
                    >
                        <span className="comment_counter">{message_item.comment_list.length}</span>
                        Comment
                    </li>
                    <li 
                        className="edit_btn"
                        onClick={() => setToggleMessageUpdate(true)} 
                        > Edit
                    </li>
                    <li onClick={() => showDeleteMessageModal()} className="delete_btn">
                        Delete
                    </li>
                    <li className="profile_btn">
                        <span>You</span> - few seconds ago
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <li className="message_item" >
            {!toggle_message_update
                ?   <MessageItem/>
                :  <form className="update_message_form" onSubmit={onSubmitUpdateMessage} method="POST">
                        <textarea 
                            onChange={(event) =>  setFieldValue(setMessageField, "update_message_field", event.target.value)} 
                            defaultValue={!toggle_message_update? "" : message_item?.message}
                        >
                        </textarea>  
                        <button 
                            className="cancel_btn" 
                            type="button"
                            onClick={() => setToggleMessageUpdate(false)} 
                        > Cancel
                        </button>
                        <button 
                            type="submit" 
                            id="message_update_btn" 
                            disabled={!update_message_field[0]?.value.length}
                        > Update Message
                        </button>
                    </form>
            }
            {toggle_comments &&
                <ul className="comment_container">
                    <li>
                        <form id="comment_form" onSubmit={onSubmitAddComment} method="POST">
                            <textarea 
                                onChange={(event) => setFieldValue(setCommentField, "comment_field", event.target.value)} 
                                value={comment_field[0]?.value}
                                placeholder="Type your comment here." 
                            >
                            </textarea>
                            <button 
                                type="submit" 
                                id="submit_comment_btn" 
                                disabled={!comment_field[0]?.value.length}
                            > Post Comment
                            </button>
                        </form>
                    </li>
                    {message_item.comment_list?.map((comment_item, comment_index) => (
                        <CommentList 
                            comment_item={comment_item} 
                            key={comment_index} 
                            message_id={message_item.id}
                        />
                    ))}
                </ul>
            }
        </li>
        
    )
}
