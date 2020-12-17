export class NavigationItem {
    icon: string;
    label: string;
    route: string;

    constructor(icon: string, label: string, route: string) {
        this.icon = icon;
        this.label = label;
        this.route = route;
    }
}