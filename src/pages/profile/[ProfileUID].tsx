import { auth } from "@/firebase/auth/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

export const Profile = () => {
    const router = useRouter();
    const [user, loading, error] = useAuthState(auth);

    const buttons = [
        {
            name: "Account overview",
        },
        {
            name: "My orders",
        },
        {
            name: "My returns",
        },
        {
            name: "My details",
        },
        {
            name: "Change password",
        },
    ];
    return (
        <>
            <div className="container">
                <div className="container__imageBlock">
                    <div className="container__imageBlock__profileImage"></div>
                    <div className="container__imageBlock__textContainer">
                        <h2>Hi,</h2>
                        <h1>{user?.displayName}</h1>
                    </div>
                </div>
                <div className="container__btnContainer">
                    {buttons.map(btn => {
                        return <button key={btn.name}>{btn.name}</button>;
                    })}
                </div>
            </div>
        </>
    );
};

export default Profile;
