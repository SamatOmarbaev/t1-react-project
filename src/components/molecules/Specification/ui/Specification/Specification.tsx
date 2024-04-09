import { memo, useState } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../../../atoms/Text/Text';
import { SpecificationItem } from '../../../../atoms/SpecificationItem/SpecificationItem';
import { SpecificationList } from '../SpecificationList/SpecificationList';
import { IProductCard } from '../../../../../helpers/types/types';
import { Button, ButtonTextColor, ButtonTheme } from '../../../../atoms/Button/Button';
import { useChangeProductByIdMutation } from '../../../../../features/products/api/productsApi';

import styles from './Specification.module.css';

interface SpecificationProps {
    className?: string;
    productSpecification: IProductCard;
}

export const Specification = memo((props: SpecificationProps) => {
    const {className, productSpecification} = props;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [changeProductById] = useChangeProductByIdMutation()

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        if (productSpecification) {
            await changeProductById({ id: productSpecification.id, updatedProduct: productSpecification });
            setIsEditing(false);
        }
    };

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
            <SpecificationList 
                productSpecification={productSpecification} 
                isEdit={isEditing}
            />
            {isEditing 
                ?   <Button 
                        theme={ButtonTheme.RED} 
                        textColor={ButtonTextColor.WHITE}
                        className={styles.btn}
                        onClick={handleSaveClick}
                        aria-label='сохранение'
                    >
                        Save
                    </Button>
                :   <Button 
                        theme={ButtonTheme.RED} 
                        textColor={ButtonTextColor.WHITE}
                        className={styles.btn}
                        onClick={handleEditClick}
                        aria-label='редактирование'
                    >
                        Edit
                    </Button>
            }
        </div>
    )
})
