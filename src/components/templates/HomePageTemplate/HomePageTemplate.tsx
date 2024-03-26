import { AboutUsSection } from '../../organisms/AboutUsSection/AboutUsSection';
import { BlockImagesTeamsSection } from '../../organisms/BlockImagesTeamsSection/BlockImagesTeamsSection';
import { FAQSection } from '../../organisms/FAQSection/FAQSection';
import { HeroSection } from '../../organisms/HeroSection/HeroSection';
import { ProductSelectionSection } from '../../organisms/ProductSelectionSection/ProductSelectionSection';
import { WatchAndSortProductSection } from '../../organisms/WatchAndSortProductSection/WatchAndSortProductSection';

export const HomePageTemplate = () => {
    return (
       <>
            <HeroSection />
            <WatchAndSortProductSection />
            <AboutUsSection />
            <ProductSelectionSection />
            <BlockImagesTeamsSection />
            <FAQSection />
       </>
    )
}
