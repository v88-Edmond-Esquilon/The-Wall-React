import { createSlice } from "@reduxjs/toolkit";
import WallDashboardService from "../_services/wall_dashboard.services";

export interface wallDashboard {
    toggle_create_message_modal: boolean;
    toggle_delete_message_modal: boolean;
    toggle_delete_comment_modal: boolean;
    message_list: Array<any>;
    selected_message_id: string;
    selected_comment_id: string;
}

const initialState: wallDashboard = {
    toggle_create_message_modal: false,
    toggle_delete_comment_modal: false,
    toggle_delete_message_modal: false,
    message_list: [],
    selected_message_id: "",
    selected_comment_id: "",
}

const WallDashboardManagement = createSlice({
    name: "wall_dashboard",
    initialState,
    reducers: {
        addComment               : WallDashboardService.addComment,
        addMessage               : WallDashboardService.addMessage,
        deleteComment            : WallDashboardService.deleteComment,
        deleteMessage            : WallDashboardService.deleteMessage,
        setSelectedCommentId     : WallDashboardService.setSelectedCommentId,
        setSelectedMessageId     : WallDashboardService.setSelectedMessageId,
        toggleCreateModal        : WallDashboardService.toggleCreateMessageModal,
        toggleDeleteCommentModal : WallDashboardService.toggleDeleteCommentModal,
        toggleDeleteMessageModal : WallDashboardService.toggleDeleteMessageModal,
        updateComment            : WallDashboardService.updateComment,
        updateMessage            : WallDashboardService.updateMessage,

    }
});

export const {
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
} = WallDashboardManagement.actions;

export default WallDashboardManagement.reducer;