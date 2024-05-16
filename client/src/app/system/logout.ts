import { AppRouterInstance } from "@/types/form-types";

export const logout = (route: AppRouterInstance) => {
    localStorage.removeItem("token");
    route.push("/login");
    route.refresh();
}