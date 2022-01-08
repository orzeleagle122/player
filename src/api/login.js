import axios from 'axios'
import {sendRequest, userLogin, errorLogin, errorLoginAction} from "../redux/account/userSlice";
import {useDispatch} from "react-redux";

const APIURL = 'https://thebetter.bsgroup.eu';

export const login = async (Username, Password) => {

    try {
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
    } catch (err) {
        errorLoginAction();
        console.log('nad tym wykona sie akcja')
    }

}

export const continueAsGuest = async () => {

    const response = await axios.post(`${APIURL}/Authorization/SignIn`, {
        Device: {
            PlatformCode: "WEB",
            Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        }
    }, {
        headers: {
            'Content-Type': "application/json"
        }
    })
}