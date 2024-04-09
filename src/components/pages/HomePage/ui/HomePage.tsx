import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { HomePageTemplate } from '@/components/templates/HomePageTemplate';

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