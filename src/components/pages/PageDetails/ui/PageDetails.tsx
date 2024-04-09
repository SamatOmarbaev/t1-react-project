import { Header } from "../../../organisms/Header/Header";
import { PageDetailsTemplate } from "../../../templates/PageDetailsTemplate/PageDetailsTemplate";

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