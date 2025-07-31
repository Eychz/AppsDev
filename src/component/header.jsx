import Button from "./button";

function Header(){
    return (
    <div className="header-content">
        <h1 href="">My Profile</h1>
        <div className="header-button"> 
            <div className="button-div">
            <Button button_name="Facebook" button_link="https://www.facebook.com/letter.eych/"/>
            </div>
            <div className="button-div">
            <Button button_name="Email" button_link="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWrRpctKGBTlKMTSrqCdBjrVxKqfLTnjzGRpVKHZPrJVxnWGhSSgkJpvHzqMJWlXFDRmgkWlv"/>
            </div>
            <div className="button-div">
            <Button button_name="Github" button_link="https://github.com/Eychz"/>
            </div>
        </div>
       
    </div>
    )
}

export default Header;