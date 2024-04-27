import { Route } from "@/types/form-types";

export const logout = (route: Route) => {
    localStorage.removeItem("token");
    route.push("/login");
    route.refresh();
}