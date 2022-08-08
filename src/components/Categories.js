import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'linen',
                    name: 'Постельное бельё'
                },
                {
                    key: 'tableware',
                    name: 'Посуда для сервировки'
                },
                {
                    key: 'decor',
                    name: 'Декор'
                },
                {
                    key: 'diffusers',
                    name: 'Диффузоры'
                }
            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;