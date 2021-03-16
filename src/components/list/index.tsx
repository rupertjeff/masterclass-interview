import classnames from 'classnames';
import React from 'react';

interface ListProps {
    as?: keyof JSX.IntrinsicElements;
    classes?: string | string[];
    flex?: boolean;
    items: React.Component[];
}

const buildItem = (flex: boolean = false) => (item) => {
    const classes = classnames({
        'w-full sm:w-1/2 md:w-1/3 lg:w-1/4': flex,
    });
    return (
        <li key={ `item-${item.id}` } className={ classes }>{ item }</li>
    );
};

export const List: React.FC<ListProps> = ({ as: Comp = 'ul', classes, flex = false, items }) => {
    const className = classnames(
        classes,
        {
            'flex flex-row flex-wrap': flex,
        },
    );

    return (
        <Comp className={ className }>
            { items.map(buildItem(flex)) }
        </Comp>
    );
};
