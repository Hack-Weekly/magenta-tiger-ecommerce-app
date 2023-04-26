import { useEffect } from "react";
import { auth, signInWithGoogle } from "../../firebase/auth/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const StyledLoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
`;

const StyledLoginBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    border: none;
    -webkit-box-shadow: 0px 0px 24px 4px rgba(199, 199, 199, 1);
    -moz-box-shadow: 0px 0px 24px 4px rgba(199, 199, 199, 1);
    box-shadow: 0px 0px 24px 4px rgba(199, 199, 199, 1);
    z-index: 2;
    width: 30rem;
    height: 35rem;
`;

const StyledTitleRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2rem;
        font-weight: 600;
    }
    a {
        text-decoration: underline;
        color: rgb(59, 120, 232);
    }
    margin-bottom: 1rem;
`;

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: black;
    input[type="text"],
    input[type="password"] {
        background-color: white;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid rgb(109, 117, 141);
    }
    button {
        background-color: rgb(170, 150, 219);
        color: white;
        padding: 1rem;
        border: none;
        border-radius: 7.5px;
        font-size: 1rem;
        font-weight: 600;
    }
`;

const StyledGoogleLoginButton = styled.button`
    border: none;
    color: rgb(109, 117, 141);
    background-color: white;
    font-weight: 100;
    font-size: 1rem;
    font-weight: 100;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 0.3rem;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    div {
        margin-left: auto;
    }
`;

const StyledParagraph = styled.p`
    color: rgb(109, 117, 141);
    text-align: left;
    margin-top: 4rem;

    a {
        text-decoration: underline;
    }
`;

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
        <>
            <StyledLoginContainer>
                <StyledLoginBox>
                    <StyledTextContainer>
                        <StyledTitleRowContainer>
                            <h1>Sign in</h1>
                            <a href="#">I don&apos;t have an account</a>
                        </StyledTitleRowContainer>
                        <input placeholder="Email" type="text" />
                        <input placeholder="Password" type="password" />
                        <button>Continue</button>
                    </StyledTextContainer>
                    <StyledGoogleLoginButton
                        onClick={() => {
                            signInWithGoogle();
                        }}
                    >
                        <FontAwesomeIcon icon={faGoogle} width={"1.1rem"} />{" "}
                        Sign in with Google
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
        </>
    );
}

export default Login;
