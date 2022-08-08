import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Кейк-стенд Emboss White',
                    img: 'cakestand_white.jpeg',
                    desc: 'Этот красивый белый кейк-стенд идеально подходит для сервировки тортов, пирожных и других кондитерских изделий. Подходит для использования в микроволновой печи и посудомоечной машине.',
                    features: 'Основные характеристики: состав - фарфор; габариты - 25,5*25,5*25',
                    category: 'tableware',
                    price: '1990'
                },
                {
                    id: 2,
                    title: 'Диффузор Ananas bliss',
                    img: 'diffuser_pineapple.jpeg',
                    desc: 'Это сооблазнительный фруктовый аромат "Ananas bliss" с тонкими медовыми нотами, оттенками спелого ананаса и нежного персика.',
                    features: 'Флакона объемом 50 мл хватит на помещение до 15 кв.м. Срок службы от 1 месяца в зависимости от места использования и количества используемых палочек.',
                    category: 'diffusers',
                    price: '590'
                },
                {
                    id: 3,
                    title: 'Постельное белье Paradise',
                    img: 'linen_flowers.jpeg',
                    desc: 'Постельное белье Paradise выполнено из мягкого и прочного поплина. Наволочки 50х70 (без ушек).Пододеяльник без молнии, с вырезом в нижней части пододеяльника.',
                    features: 'Основные характеристики: состав - хлопок 100%; страна производства - Россия',
                    category: 'linen',
                    price: '2090'
                },
                {
                    id: 4,
                    title: 'Комплект наволочек с ушками Incienso',
                    img: 'pillowcase.jpeg',
                    desc: 'Рекомендуемая температура воды при стирке 40 º.Машинная стирка при 40 º; Нельзя отбеливать; Химчистка запрещена; Гладить при температуре ( до 110 градусов); Щадящий отжим при сушке изделия.',
                    features: 'Основные характеристики: состав - Хлопок 100%; размер - 50х70 (2 шт.)',
                    category: 'linen',
                    price: '690'
                },
                {
                    id: 5,
                    title: 'Постельное бельё Petali',
                    img: 'linen.webp',
                    desc: 'Комплект постельного белья Petali - яркий акцент в интерьере.',
                    features: ' Основные характеристики: Хлопок 100%; размеры: пододеяльник - 215х145, простыня - 220х150, наволочка - 50х70 (2 шт.)',
                    category: 'linen',
                    price: '2490'
                },
                {
                    id: 6,
                    title: 'Набор столовых приборов Anna Molly',
                    img: 'tableware.jpeg',
                    desc: 'Этот прекрасный столовый набор идеально подходит для сервировки.Можно мыть в посудомоечной машине. Запрещается использовать в СВЧ-печи.',
                    features: 'Основные характеристики: состав - сталь, пластик; цвет - зелёный; страна производства: Китай',
                    category: 'tableware',
                    price: '1490'
                },
                {
                    id: 7,
                    title: 'Постельное бельё Incienso',
                    img: 'linen_incienso.webp',
                    desc: 'Яркий комплект постельного белья Incienso - наполнит интерьер весенним настроением. Комплект выполнен из прочного и мягкого перкаля.',
                    features: 'Основные характеристики: Хлопок 100%; размеры: пододеяльник - 215х145, простыня - 220х150, наволочка - 50х70 (2 шт.)',
                    category: 'linen',
                    price: '2490'
                },
                {
                    id: 8,
                    title: 'Ваза Timpanari',
                    img: 'vase_timpanari.webp',
                    desc: 'Ваза для цветов «Timpanari» - однозначно притягивает внимание! Ваза выполнена из фарфора белого цвета. Эта ваза станет изысканным дополнением Вашего интерьера.',
                    features: 'Основные характеристики: состав - фарфор; габариты - 8*8*17',
                    category: 'decor',
                    price: '1190'
                },
                {
                    id: 9,
                    title: 'Ваза Fucida',
                    img: 'vase_fucida.webp',
                    features: 'Основные характеристики: состав - стекло; габариты - 17*17*32',
                    desc: 'Ваза для цветов «Fucida» - однозначно притягивает внимание! Ваза выполнена из прозрачного стекла нежно-розового цвета. Воздушный дизайн в виде элементов пера и легкость плавных линий станет изысканным дополнением Вашего интерьера.',
                    category: 'decor',
                    price: '1590'
                }
            ],
            ShowFullItem:false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.ShowFullItem && <ShowFullItem onShowItem = {this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({ShowFullItem: !this.state.ShowFullItem})
    }
    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
