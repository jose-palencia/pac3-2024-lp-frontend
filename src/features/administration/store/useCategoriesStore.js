import { create } from "zustand";
import { getCategoriesByIdAsync, getCategoriesPaginationAsync } from "../../../shared/actions/categories";

export const useCategoriesStore = create((set) => ({
    selectedCategory: {},
    categoriesData: {
        hasNextPage: false,
        hasPreviousPage: false,
        currentPage: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 0,
        items: []
    },

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getCategoriesPaginationAsync(searchTerm, page);

        if(result.status) {
            set({categoriesData: result.data});
            return;
        }

        set({categoriesData: null});
        return;
    },

    getCategory: async (id) => {
        const result =  await getCategoriesByIdAsync(id);

        if(result.status) {
            set({selectedCategory: result.data});
            return;
        }

        set({selectedCategory: null});
        return;
    },
}));