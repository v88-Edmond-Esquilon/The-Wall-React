import { 
        addComment,
        addMessage,
        deleteComment,
        deleteMessage, 
        setSelectedCommentId,
        setSelectedMessageId, 
        toggleCreateModal,
        toggleDeleteCommentModal, 
        toggleDeleteMessageModal, 
        updateComment, 
        updateMessage,
    } from "../_reducers/wall_dashboard.reducer"

export const wallDashboardState = {
    toggleCreateModal: (params) => {
        return (dispatcher) => {
            dispatcher(toggleCreateModal(params));
        }
    },
    addMessage: (params) => {
        return (dispatcher) => {
            dispatcher(addMessage(params));
        }
    },
    updateMessage: (params) => {
        return (dispatcher) => {
            dispatcher(updateMessage(params));
        }
    },
    toggleDeleteMessageModal: (params) => {
        return (dispatcher) => {
            dispatcher(toggleDeleteMessageModal(params));
        }
    },
    setSelectedMessageId: (params) => {
        return (dispatcher) => {
            dispatcher(setSelectedMessageId(params));
        }
    },
    setSelectedCommentId: (params) => {
        return (dispatcher) => {
            dispatcher(setSelectedCommentId(params));
        }
    },
    deleteMessage: (params) => {
        return (dispatcher) => {
            dispatcher(deleteMessage(params));
        }
    },
    addComment: (params) => {
        return (dispatcher) => {
            dispatcher(addComment(params));
        }
    },
    toggleDeleteCommentModal: (params)=> {
        return (dispatcher) => {
            dispatcher(toggleDeleteCommentModal(params));
        }
    },
    deleteComment: (params) => {
        return (dispatcher) => {
            dispatcher(deleteComment(params));
        }
    },
    updateComment: (params) => {
        return (dispatcher) => {
            dispatcher(updateComment(params));
        }
    }
}