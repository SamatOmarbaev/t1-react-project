import { memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../../../atoms/Text/Text';
import { SpecificationItem } from '../../../../atoms/SpecificationItem/SpecificationItem';
import { SpecificationList } from '../SpecificationList/SpecificationList';
import { IProductCard } from '../../../../../helpers/types/types';

import styles from './Specification.module.css';

interface SpecificationProps {
    className?: string;
    productSpecification?: IProductCard;
}

export const Specification = memo((props: SpecificationProps) => {
    const {className, productSpecification} = props;

    return (
        <div className={classNames(styles.Specification, {}, [className])}>
            <div className={styles.title}>
                <Text 
                    size={TextSize.L}
                    tagType={TagType.h3}
                    tagName={productSpecification?.title}
                    theme={TextTheme.DARK_GRAY}
                    weight={TextWeight.SEMIBOLD}
                />
                <SpecificationItem name='SKU ID' property={productSpecification?.id} />
            </div>
            <SpecificationList productSpecification={productSpecification} />
        </div>
    )
})
