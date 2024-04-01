import { memo, useState } from 'react';
import classNames from 'classnames';

import { Applink } from '../../../../atoms/Applink/Applink';
import { RoutePath } from '../../../../../router/routes';

import styles from './Navigation.module.css';

interface NavigationProps {
    className?: string;
    last?: boolean;
}

export const Navigation = memo((props: NavigationProps) => {
    const {className, last = true} = props;
    const [isAdminPage, setIsAdminPage] = useState(false);

    const smoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // useEffect(() => {
    //     const storedIsAdminPage = localStorage.getItem('isAdminPage');
    //     if (storedIsAdminPage) {
    //         setIsAdminPage(JSON.parse(storedIsAdminPage));
    //     }
    // }, []);

    const handleAdminLinkClick = () => {
        setIsAdminPage(true);
        // localStorage.setItem('isAdminPage', JSON.stringify(true));
    };

    const handleBackToSiteClick = () => {
        setIsAdminPage(false);
        // localStorage.setItem('isAdminPage', JSON.stringify(false));
    };

    return (
       <nav className={classNames(styles.Navigation, {}, [className])}>
            {isAdminPage ? (
                <Applink to={RoutePath.HOME} onClick={handleBackToSiteClick}>
                    Back to site
                </Applink>
            ) : (
                <>
                    <Applink onClick={() => smoothScroll('catalog')}>
                        Catalog
                    </Applink>
                    <Applink onClick={() => smoothScroll('about')}>
                        About us
                    </Applink>
                    <Applink onClick={() => smoothScroll('product')}>
                        Product selection
                    </Applink>
                    <Applink onClick={() => smoothScroll('team')}>
                        Our team
                    </Applink>
                    <Applink onClick={() => smoothScroll('faq')}>
                        FAQ
                    </Applink>
                    {last &&  <Applink to={RoutePath.ADMIN} onClick={handleAdminLinkClick}>
                        For staff
                    </Applink>}
                </>
            )}
       </nav>
    )
})
