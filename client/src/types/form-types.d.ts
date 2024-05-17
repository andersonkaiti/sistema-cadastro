export type FormType = {
    name?: string;
    email?: string;
    password?: string;
    id?: string;
}

export type UserData = {
    id: string;
    name: string;
    email: string;
}

export type InputType = {
    id: string;
    name: string;
    type: string;
    ref: React.RefObject<HTMLInputElement>;
};

export type SubmitPromise = {
    status: boolean,
    message: string
}

export type UserAuthentication = {
    status: boolean;
    email?: string;
    name?: string;
}

export type AppRouterInstance = {
    push(href: string): void;
    refresh(): void;
}