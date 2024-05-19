// forms
export type FormType = {
    name: string;
    email: string;
    password: string;
    id: string;
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
    message: string,
}

export type UserAuthentication = {
    status: boolean;
    message?: string;
    email?: string;
    name?: string;
}

export type LoginType = SubmitPromise & {
    token?: string;
}

// logout
export type AppRouterInstance = {
    push(href: string): void;
    refresh(): void;
}

// components
export type ErrorType = {
    error: Error
}

export type ButtonProps = {
    children: string;
} & React.ComponentProps<"input">;

export type ErrorMessageProps = {
    children: string;
}

export type InputProps = {
    reference: React.RefObject<HTMLInputElement>
} & React.ComponentProps<"input">;