import axios from 'axios'

const APIURL = 'https://thebetter.bsgroup.eu/';

export const login = async () => {
    const response = await axios.post(APIURL, {
        Username: "test@bsgroup.eu",
        Password: "Test12!@",
        Device: {
            PlatformCode: "WEB",
            Name: "7a6a86e5-356f-4795-8998-305e1b205531"
        }
    });

    console.log(response);
}