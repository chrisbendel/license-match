// Missing ID - our input will use this
export interface TestLicense {
    [key: string]: string | number | Date; // Must accommodate all members
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    dob: Date;
    sex: string;
    issued: Date;
};

export interface License extends TestLicense {
    id: number;
};

export interface RankedLicense {
    id: number;
    confidence: number;
};

export const licenseWeights = {
    firstName: 2,
    lastName: 3,
    street: 2,
    city: 1,
    dob: 3,
    sex: 1,
    issued: 2
};