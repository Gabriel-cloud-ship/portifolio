import MyHistory from "../components/MyHistory";
import NavigationTab from "../components/NavigationTab";
import "../styles/Profile.css";

function Profile() {
    return (
        <main>
            <section className="carroulsel-container">
                <NavigationTab />
                <MyHistory />
            </section>
        </main>
    );
}

export default Profile;