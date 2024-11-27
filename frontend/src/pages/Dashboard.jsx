import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users"

export function Dashboard(){
    return <div>
        <AppBar>
        </AppBar>
        <div className="m-8">
        <Balance value={"1000"}></Balance>
            <Users />
        </div>
    </div>
} 