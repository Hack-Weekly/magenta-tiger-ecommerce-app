import { useEffect } from "react";
import { auth, signInWithGoogle } from "../../firebase/auth/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
    StyledLoginContainer,
    StyledLoginBox,
    StyledTextContainer,
    StyledTitleRowContainer,
    StyledGoogleLoginButton,
    StyledParagraph,
} from "../../styles/style-components/Login.styles";

function Login() {
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            console.log("user active");
        }
    }, [user, loading]);

    return (
        <StyledLoginContainer>
            <StyledLoginBox>
                <StyledTextContainer>
                    <StyledTitleRowContainer>
                        <h1>Sign in</h1>
                        <a href="#">I don&apos;t have an account</a>
                    </StyledTitleRowContainer>
                    <input placeholder="Email" type="email" />
                    <input placeholder="Password" type="password" />
                    <button>Continue</button>
                </StyledTextContainer>
                <StyledGoogleLoginButton
                    onClick={() => {
                        signInWithGoogle();
                    }}
                >
                    <FontAwesomeIcon icon={faGoogle} width={"1.1rem"} /> Sign in
                    with Google
                    <div>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            width={"0.8rem"}
                        />
                    </div>
                </StyledGoogleLoginButton>
                <StyledParagraph>
                    This site is protect by the Google{" "}
                    <a href="#">Privacy Policy</a>{" "}
                    <a href="#">Terms and Conditions</a> -{" "}
                    <a href="#">Privacy Policy</a> -{" "}
                    <a href="#">CA Privacy Policy</a>
                </StyledParagraph>
            </StyledLoginBox>
        </StyledLoginContainer>
    );
}

export default Login;
