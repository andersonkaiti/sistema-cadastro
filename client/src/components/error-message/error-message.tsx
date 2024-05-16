type ErrorMessageProps = {
    children: string;
}

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