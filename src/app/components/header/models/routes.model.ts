export const Routes = {
  home: {
    nameRoute: "AI Chat",
    pathRoute: "/",
    pathIconRoute: "ai chat",
  },
  Dashboard: {
    nameRoute: "Dashboard",
    pathRoute: "/dashboard",
    pathIconRoute: "dashboard",
  },
};

export interface Route {
  nameRoute: string;
  pathRoute: string;
  pathIconRoute: string;
}

export interface Routes {
  routes: Route[];
}
