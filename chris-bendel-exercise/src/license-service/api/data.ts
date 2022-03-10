import { License, TestLicense } from "../model/license";

// IRL this comes from network requests to our backend
export const myLicense: TestLicense = {
    firstName: "Chris",
    lastName: "Bendel",
    street: "165 Valleyfield Drive",
    city: "Colchester",
    dob: new Date("3/11/1993"),
    sex: "M",
    issued: new Date("3/11/2020")
};

export const myBadLicense: TestLicense = {
    firstName: "",
    lastName: "",
    street: "165 Valleyfield Drive",
    city: "Colchester",
    dob: new Date("3/11/1993"),
    sex: "M",
    issued: new Date("3/11/2020")
};

export const licenses: License[] = [
    {
        id: 546343376,
        firstName: "Trey",
        lastName: "Anastasio",
        street: "123 Fee Road",
        city: "Manhattan",
        dob: new Date("5/4/1972"),
        sex: "M",
        issued: new Date("5/25/2019")
    },
    {
        id: 934834123,
        firstName: "Page",
        lastName: "McConnell",
        street: "555 Possum Hill",
        city: "Burlington",
        dob: new Date("8/3//1975"),
        sex: "M",
        issued: new Date("12/23/2013")
    },
    {
        id: 987654321,
        firstName: "Chris",
        lastName: "Bendel",
        street: "165 Valleyfield Drive",
        city: "Colchester",
        dob: new Date("3/11/1993"),
        sex: "M",
        issued: new Date("3/11/2020")
    },
    {
        id: 987654322,
        firstName: "Chris",
        lastName: "Bendel",
        street: "165 Valleyfield Dr",
        city: "Colchest",
        dob: new Date("3/11/1993"),
        sex: "M",
        issued: new Date("3/11/2020")
    },
    {
        id: 987654322,
        firstName: "Christopher",
        lastName: "Bendel",
        street: "165 Valleyfield Dr",
        city: "Colchest",
        dob: new Date("3/12/1993"),
        sex: "M",
        issued: new Date("3/12/2020")
    }
];