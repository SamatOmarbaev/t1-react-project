import { Footer } from '../../../organisms/Footer/Footer';
import { HomePageTemplate } from '../../../templates/HomePageTemplate/HomePageTemplate';

const HomePage = () => {
    return (
       <>
            <main className="mainContent">
                <HomePageTemplate />
            </main>
            <Footer />
       </>
    )
}

export default HomePage;