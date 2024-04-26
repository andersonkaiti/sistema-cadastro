const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export class Email {
    private constructor() { }
    
    static validate(email: string): boolean {
        if(typeof email !== "string" || !emailPattern.test(email) || email.length < 1) {
            return false;
        }
        return true;
    }
}