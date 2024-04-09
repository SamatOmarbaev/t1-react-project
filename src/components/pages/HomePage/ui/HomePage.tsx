import { Footer } from '../../../organisms/Footer/Footer';
import { Header } from '../../../organisms/Header/Header';
import { HomePageTemplate } from '../../../templates/HomePageTemplate/HomePageTemplate';

const HomePage = () => {
    return (
       <>
            <Header borderBottom />
            <main className="mainContent">
                <HomePageTemplate />
            </main>
            <Footer />
       </>
    )
}

export default HomePage;