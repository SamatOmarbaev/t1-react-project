import { Header } from "@/components/organisms/Header";
import { PageDetailsTemplate } from "@/components/templates/PageDetailsTemplate";

const PageDetails = () => {
    return (
       <>
            <Header isAdminPage />
            <main className="mainContent">
                <PageDetailsTemplate />
            </main>
       </>
    )
}

export default PageDetails;