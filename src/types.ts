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

export interface CardInterface{
    indicator?: string,
    badge?: BadgeInterface,
    image1?: string,
    image2?: string,
    image1_alt?: string,
    image2_alt?: string,
    title: string,
    subtitle?: string,
    body: string,
    btn: ButtonInterface
}