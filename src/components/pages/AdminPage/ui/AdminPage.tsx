import { Header } from "../../../organisms/Header/Header";
import { AdminPageTemplate } from "../../../templates/AdminPageTemplate/AdminPageTemplate";

const AdminPage = () => {
    return (
       <>   
            <Header isAdminPage />
            <main className="mainContent">
                <AdminPageTemplate />
            </main>
       </>
    )
}

export default AdminPage;