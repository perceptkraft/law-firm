import React from 'react'
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="I Agree"
                cookieName="myAwesomeCookieName2"
                style={{ background: "black", color: 'white', border: 'solid', borderWidth: '1px', borderRadius: '10px', marginBottom: '5px', fontWeight: '800', fontFamily: 'Roboto' }}
                buttonStyle={{ color: "#4e503b", borderRadius: '10%', fontWeight: '800', fontFamily: 'Roboto' }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </div>
    )
}

export default Cookies
