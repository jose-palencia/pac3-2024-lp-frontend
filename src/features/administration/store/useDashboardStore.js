import { create } from "zustand";
import { dashboardAsync } from "../../../shared/actions/dashboard";

export const useDashboardStore = create((set) => ({
    dashboardData: null,
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