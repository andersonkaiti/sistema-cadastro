import { Route } from "@/types/form-types";

export function logout(route: Route) {
    localStorage.removeItem("token");
    route.push("/login");
    route.refresh();
}