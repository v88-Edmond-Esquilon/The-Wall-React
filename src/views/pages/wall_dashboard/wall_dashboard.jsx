/** React */
import React                        from "react";
/** Components */
import { MessageList, NavBar }      from "../../components";
import { 
        DeleteCommentModal,
        DeleteMessageModal,
        CreateMessageModal
    } from "../../modals";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { wallDashboardState }       from "../../../_actions/wall_dashboard.actions";
/** Image */
import NoMessageImg                 from "../../../assets/images/empty_inbox.svg";
import "./wall_dashboard.less";

export default function WallDashboard() {
    const { wall_dashboard: { 
            toggle_create_message_modal,
            toggle_delete_message_modal,
            toggle_delete_comment_modal,
            message_list
        }} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div id="wall_dashboard_container">
            <NavBar/>
            <div id="message_container">
                <header>
                    <p><span id="message_counter">{message_list.length}</span> messages arranged by latest posted</p>
                    <button 
                        id="create_message_btn" 
                        type="button"
                        onClick={() => dispatch(wallDashboardState.toggleCreateModal(true))} 
                    > Create Message
                    </button>
                </header>
                <div id="no_message_inbox" className={message_list.length? "inactive_display" : "" }>
                    <img src={NoMessageImg} alt="No message inbox color blue" />
                    <p>No Posted Message Yet.</p>
                </div>
                <ul id="message_list">
                    {message_list.map(message_item => (
                        <MessageList 
                            message_item={message_item}
                            key={message_item.id}
                        />
                    ))}
                </ul>
            </div>
            {toggle_create_message_modal &&
                <CreateMessageModal/> 
            }
            {toggle_delete_message_modal &&
                <DeleteMessageModal/> 
            }
            {toggle_delete_comment_modal &&
                 <DeleteCommentModal/>
            }
        </div>
    )
}
