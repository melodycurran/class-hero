import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";



export type User = {
    fname: string,
    lname: string,
    email: string,
    ph: string,
    pw: string,
    type: string,
    account_type: string
}

export interface PreviewProps {
    children: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type RefElement = HTMLDivElement

export interface DataProps {
    title: string,
    price: number,
    className: string,
}

export interface FormState {
    message: string;
    errors?: {
        fname?: string[];
        lname?: string[];
        email?: string[];
        ph?: string[];
        pw?: string[];
        type?: string[];
        account_type?: string[];
        created_at?: string[],
        form?: string[]
    };
    success?: boolean;
}

export interface MenuItems {
    name: string,
    path?: string,
    icon: React.ElementType,
}

export interface Menu {
    menuItems: MenuItems[],
}

export interface CanvasProps {
    width?: number,
    height?: number,
    onClick: (event: React.MouseEvent<SVGElement>) => void
}

export interface DesignFormState {
    message?: string,
    errors?: {
        projectId?: string[],
        projectName?: string[],
        width?: string[],
        height?: string[],
        jsonTemplate?: string[],
        userId?: string[],
        created_at?: string[]
    }
    success?: boolean
}

export interface CanvasDetailsProps {
    width: string,
    height: string,
    projectName: string
}

export interface ProjectDataType {
    projectId?: string,
    created_at?: Date | null,
    height?: string,
    jsonTemplate?: object | null,
    projectName?: string,
    userId?: string | null,
    width?: string
}

export interface ProjectDataProps {
    projectId?: string,
    created_at?: Date | null,
    height?: string,
    jsonTemplate?: object | null,
    projectName?: string,
    userId?: string | null,
    width?: string,
    children: React.ReactNode
}

export interface ColorPickerProps {
    value: string,
    onColorChange: (color: string) => void
}

export interface ProviderDivProps {
    children: React.ReactNode,
    className: string,
}

export interface UnsplashListType {
    urls: {
        full: string,
        raw: string,
        regular: string,
        small: string,
        small_s3: string,
        thumb: string
    },
    alt_description: string
}

export interface ShapesTypes {
    name: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}
