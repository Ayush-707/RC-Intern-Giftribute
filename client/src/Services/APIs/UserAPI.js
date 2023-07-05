import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const LoginAPI = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/user/login`, data)
}

export const RegisterAPI = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/user/register`, data)
}

export const myProfile = async (email) => {
    return await commonrequest("GET", `${BACKEND_URL}/user/profile?email=${email}`);
  };

  export const CustCare = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/user/contact`, data)
}

export const myFlowers = async(data) => {
    return await commonrequest("GET", `${BACKEND_URL}/user/gifts/flowers`, data)
}
  


// export const RequestNewAccount = async(data) => {
//     return await commonrequest("POST", `${BACKEND_URL}/User/New-Account`, data);
// }

// export const InvestAccount = async(data) => {
//     return await commonrequest("POST", `${BACKEND_URL}/User/InAccount`, data);
// }

// export const GetAccountInfo = async(data) => {
//     return await commonrequest("POST", `${BACKEND_URL}/User/Home`, data);
// }


// export const Transact = async(data) => {
//     return await commonrequest("POST", `${BACKEND_URL}/User/Transaction`, data)
// }

// export const TransactRec = async(data) => {
//     return await commonrequest("POST", `${BACKEND_URL}/User/TransactRec`, data)
// }

// export const accA = async() => {
    
//     const url = `${BACKEND_URL}/User/UserA`;
//     return await commonrequest("GET", url);
// }
