import { useEffect } from "react";
import { auth, signInWithGoogle } from "../../firebase/auth/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const StyledLoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
`;
const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    color: black;

    h1 {
    }
    p {
        font-weight: 500;
    }
`;

const StyledLoginBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: rgb(245, 245, 245);
    padding: 2rem;
    border-radius: 1rem;
    border: 3px solid rgb(227, 227, 227);
    z-index: 2;
`;

const StyledGoogleLoginButton = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: #4285f4;
    border-radius: 0.3rem;
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
                        <h1>Welcome</h1>
                        <p>Continue with google below</p>
                    </StyledTextContainer>
                    <StyledGoogleLoginButton
                        onClick={() => {
                            signInWithGoogle();
                        }}
                    >
                        Login with Google
                    </StyledGoogleLoginButton>
                </StyledLoginBox>
            </StyledLoginContainer>
        </>
    );
}

export default Login;
