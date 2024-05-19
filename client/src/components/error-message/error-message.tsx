import { ErrorMessageProps } from "@/types/form-types";

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <>
            {children.length > 0 && (
                <p>
                    {children}
                </p>
            )}
        </>
    );
}