import { GoogleLogout } from 'react-google-login';

const clientId = "1060612665560-bavf4bnjtsrdu1ep6if4kssggv9ko56a.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("Log out succesfull!")
    }

    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout