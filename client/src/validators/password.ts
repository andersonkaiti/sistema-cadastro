const passwordPattern = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

export class Password {
    private constructor() { }

    static validate(password: string): boolean {
        if(typeof password !== "string" || !passwordPattern.test(password) || password.length < 6) {
            return false;
        }
        return true;
    }
}