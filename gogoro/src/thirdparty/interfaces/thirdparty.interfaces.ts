interface User {
    name: string;
    jobType: string;
    id: string;
}

interface UserDetail {
    createdAt: string,
    city: string,
    zipCode: string,
    address: string,
    gender: string,
    id: string
}




export {User, UserDetail}