export class Contact {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    phoneNumber: string;

    constructor(id?: number, firstName?: string, lastName?: string, email?: string, phoneNumber?: string)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

}
