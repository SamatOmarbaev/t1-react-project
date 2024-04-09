import { useNavigate } from 'react-router-dom';

import { Button, ButtonTheme } from '@/components/atoms/Button';
import { TagType, Text, TextSize, TextTheme } from '@/components/atoms/Text';
import { RoutePath } from '@/router/routes';

import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    const navigate = useNavigate()
    
    return (
       <div className={styles.notfound}>
            <Text 
                size={TextSize.XXL} 
                tagName='404' 
                tagType={TagType.h1} 
                theme={TextTheme.DARK_GRAY} 
            />
            <Text 
                size={TextSize.L}
                theme={TextTheme.GRAY}
                tagName='Sorry, the page you visited does not exist.'
            />
            <Button
                onClick={() => navigate(RoutePath.HOME)}
                theme={ButtonTheme.OUTLINE}
                aria-label='вернуться домой'
            >
                Back Home
            </Button>
       </div>
    )
}

export default NotFoundPage;