import axios from 'axios'

const APIURL = 'https://thebetter.bsgroup.eu';

export const login = async (Username, Password) => {
    const response = await axios.post(`${APIURL}/Authorization/SignIn`, {
        Username,
        Password,
        Device: {
            PlatformCode: "WEB",
            Name: "7a6a86e5-356f-4795-8998-305e1b205531"
        }
    }, {
        headers: {
            'Content-Type': "application/json"
        }
    })
    console.log(response);
    // userLogin(data);
}