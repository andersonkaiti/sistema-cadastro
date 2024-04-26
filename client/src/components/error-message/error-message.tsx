type ErrorMessageProps = {
    errorMessage: string;
}

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
    return (
        <>
            {errorMessage.length > 0 && (
                <p>
                    {errorMessage}
                </p>
            )}
        </>
    );
}