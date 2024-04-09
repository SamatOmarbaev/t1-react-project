import { Header } from "@/components/organisms/Header";
import { AdminPageTemplate } from "@/components/templates/AdminPageTemplate";

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