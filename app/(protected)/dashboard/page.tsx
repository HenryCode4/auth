import {auth, signOut} from "@/auth"

const Dashboard = async () => {
    const session = await auth();
    return ( 
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";

                await signOut()
            }}>
                <button className="" type="submit">
                    Sign Out
                </button>
            </form>
        </div>
     );
}
 
export default Dashboard;