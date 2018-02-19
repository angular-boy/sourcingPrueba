export class Contact {
    email: string;
    firstName: string;
    lastName: string;
    password: string;

    constructor(firstName?: string, lastName?: string, email?: string, password?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
    }

}
