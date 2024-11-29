import { getCategoriesPaginationAsync } from "../../../shared/actions/categories";

export const useCategoriesStore = create((set) => ({
    selectedCategory: {},
    categoriesData: {},

    loadData: async (searchTerm = "", page = 1) => {
        const result =  await getCategoriesPaginationAsync(searchTerm, page);

        if(result.status) {
            set({categoriesData: result.data});
            return;
        }

        set({categoriesData: null});
        return;
    },
}));