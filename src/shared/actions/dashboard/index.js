import { blogApi } from "../../../config/api/blogApi";

export const dashboardAsync = async () => {
    try {
        const { data } = await blogApi.get("/dashboard/info");
        return data;
    } catch (error) {
        console.error(error);
        return error?.response.data;
    }
}