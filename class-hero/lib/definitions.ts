

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
