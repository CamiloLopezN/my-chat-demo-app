export const Routes = {
  home: {
    nameRoute: "AI Chat",
    pathRoute: "/",
    pathIconRoute: "ai chat",
    isSelected: true,
  },
  Dashboard: {
    nameRoute: "Dashboard",
    pathRoute: "/dashboard",
    pathIconRoute: "dashboard",
    isSelected: false
  },
};

export interface Route {
  nameRoute: string;
  pathRoute: string;
  pathIconRoute: string;
  isSelected: boolean;
}

export interface Routes {
  routes: Route[];
}
