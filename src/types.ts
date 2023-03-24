export interface BadgeInterface{
    text: string;
    filled?: boolean;
}

export interface ButtonInterface{
    text: string;
    filled?: boolean;
    type: string;
    href: string;
    icon?: JSX.Element;
}