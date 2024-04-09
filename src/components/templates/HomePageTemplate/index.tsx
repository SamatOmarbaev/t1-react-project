import { AboutUsSection } from '@/components/organisms/AboutUsSection';
import { BlockImagesTeamsSection } from '@/components/organisms/BlockImagesTeamsSection';
import { FAQSection } from '@/components/organisms/FAQSection';
import { HeroSection } from '@/components/organisms/HeroSection';
import { ProductSelectionSection } from '@/components/organisms/ProductSelectionSection';
import { WatchAndSortProductSection } from '@/components/organisms/WatchAndSortProductSection';

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
