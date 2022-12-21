import React from 'react';
import Item from '../../components/Item';
import './styles.scss';

const ItemListContainer = () => {
    return (
        <div className='item-list-container'>
            <Item title={"Rueda 1"}/>
            <Item title={"Rueda 2"}/>
            <Item title={"Rueda 3"}/>
            <Item title={"Rueda 4"}/>
            <Item title={"Rueda 5"}/>
        </div>
    );
};

export default ItemListContainer;