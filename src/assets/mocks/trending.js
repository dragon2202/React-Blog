import moment from 'moment'

const mygames = [
    {
        title: 'Dead by Daylight',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action'],
        link: '#',
        image: 'dbd.jpg',
    },
    {
        title: 'For Honor',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action'],
        link: '#',
        image: 'forhonor.jpg',
    },
    {
        title: 'Halo Wars 2',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action', 'Strategy'],
        link: '#',
        image: 'halowars2.jpg'
    },
    {
        title: 'Runescape',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Action', 'Adventure','Role-Playing', 'MMO'],
        link: '#',
        image: 'runescape.jpg'
    },
    {
        title: 'Tropico 5',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Simulation', 'Strategy'],
        link: '#',
        image: 'tropico.jpg'
    },
]
export default mygames;