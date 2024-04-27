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
    identifier: string;
    inputName: string;
    type: string;
    reference: React.RefObject<HTMLInputElement>;
};

export type SubmitPromise = {
    status: boolean,
    message: string
}

export type UserAuthentication = {
    status: boolean;
    email: string;
}

export type Route = {
    push: (path: string) => void;
    refresh: () => void;
}