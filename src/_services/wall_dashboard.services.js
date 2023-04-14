import { generateId } from "../_helpers/helper";
import produce from 'immer';

const toggleCreateMessageModal = (state, action) => {
    state.toggle_create_message_modal = action.payload;
}

const toggleDeleteMessageModal = (state, action) => {
    state.toggle_delete_message_modal = action.payload;
}

const toggleDeleteCommentModal = (state, action) => {
    state.toggle_delete_comment_modal = action.payload;
}

const addMessage = (state, action) => {
    state.message_list.unshift(action.payload);
}

const addComment = (state, action) => {
    const message_id    = action.payload.message_id;
    const comment_value = action.payload.comment;
    state.message_list.map(message_item => {
        if(message_item.id === message_id){
            message_item.comment_list.unshift({id: generateId(), comment: comment_value});
        }
    })
}

const updateMessage = (state, action) => {
    const message_id = action.payload.message_id;
    const updated_message = action.payload.updated_message;
    const updated_message_list = state.message_list.map(message_item => {
        if (message_item.id === message_id) {
            return { ...message_item, message: updated_message };
        }
        return message_item;
    });

    return {
        ...state,
        message_list: updated_message_list
    };
};

const updateComment = (state, action) => {
    const message_id = action.payload.message_id;
    const comment_id = action.payload.comment_id;
    const updated_comment = action.payload.updated_comment;
    const updated_message_list = state.message_list.map(message_item => {
        if (message_item.id === message_id) {
            const updated_comments = message_item.comment_list.map(comment_item => {
                if (comment_item.id === comment_id) {
                    return { ...comment_item, comment: updated_comment };
                }
                return comment_item;
            });
            return { ...message_item, comment_list: updated_comments };
        }
        return message_item;
    });

    return {
        ...state,
        message_list: updated_message_list
    };
};

const setSelectedMessageId = (state, action) => {
    state.selected_message_id = action.payload;
}

const setSelectedCommentId = (state,action) => {
    state.selected_comment_id = action.payload;
}

const deleteMessage = (state, action) => {
    const message_id      = action.payload;
    const updated_message = state.message_list.filter(message_item => message_item.id !== message_id);

    return {
        ...state,
        message_list: updated_message
    };
}

const deleteComment = (state, action) => {
    const message_id = action.payload.message_id;
    const comment_id = action.payload.comment_id;

    return produce(state, draftState => {
        const message_item = draftState.message_list.find(item => item.id === message_id);
        if (message_item) {
            message_item.comment_list = message_item.comment_list.filter(comment_item => comment_item.id !== comment_id);
        }
    });
};



const WallDashboardService = {
    addComment,
    addMessage,
    deleteComment,
    deleteMessage,
    setSelectedCommentId,
    setSelectedMessageId,
    toggleCreateMessageModal,
    toggleDeleteCommentModal,
    toggleDeleteMessageModal,
    updateComment,
    updateMessage,
}

export default WallDashboardService;