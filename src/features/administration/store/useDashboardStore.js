import { create } from "zustand";
import { dashboardAsync } from "../../../shared/actions/dashboard";

export const useDashboardStore = create((set) => ({
    dashboardData: {
        usersCount: 0,
        tagsCount: 0,
        commentsCount: 0,
        postsCount: 0,
        categories: [],
        posts: [],
        tags: []
    },
    loadData: async () => {
        const result = await dashboardAsync();

        if(result.status) {
            set({dashboardData: result.data});
            return;
        }

        set({dashboardData: null});
        return;
    }
}));