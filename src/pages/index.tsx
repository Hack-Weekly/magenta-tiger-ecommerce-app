import { CreateProductForm } from "@/components/CreationPage/CreateProductForm/CreateProductForm";
import Login from "./login/Login";
import { Profile } from "./profile/Profile";

export default function Web() {
    return (
        <>
            <Login />
            <Profile />
        </>
    );
}
