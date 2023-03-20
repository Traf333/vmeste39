/// <reference types="@astrojs/image/client" />

export interface IPicture {
    url: string;
}

export interface IProject {
    title: string;
    content: string;
    slug: string;
}

export interface IPost {
    title: string;
    content: string;
    imageCover: IPicture;
    slug: string;
}
export interface IPet {
    id: string;
    name: string;
    intro: string;
    bio: string;
    picture: IPicture;
}