import moment from 'moment'

const gamecategories = [
    {
        title: 'Cyberpunk 2077',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action', 'Adventure', 'Role-Playing', 'Shooter'],
        link: '#',
        image: '2077.jpg',
    },
    {
        title: 'Assassin Creed: Valhalla',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action', 'Adventure', 'Role-Playing'],
        link: '#',
        image: 'acvalhalla.jpg',
    },
    {
        title: 'Halo Infinite',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action', 'Shooter'],
        link: '#',
        image: 'haloinfinite.jpg'
    },
    {
        title: 'Ghost of Tsushima',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action', 'Adventure', 'Role-Playing'],
        link: '#',
        image: 'ghost.jpg'
    },
]
export default gamecategories;