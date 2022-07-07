const { Module } = require('module');
const Product=require('./models/product');


const products=[
    {
        name:'HEART CAKESICLE',
        price:100,
        desc:'Heart Cakesicle',
        img:'/images/image2.jpg'
    },
    {
        name:'CHOCOLATE MENDIANTS',
        price:250,
        desc:'Chocolate Mendiants',
        img:'/images/image3.jpg'

    },
    {
        name:'BLUEBERRY BAR',
        price:100,
        desc:'Blueberry Bar',
        img:"/images/image12.jpeg"
    },
    {
        name:'STRAWBERRY CAKESICLE',
        price:150,
        desc:'strawberry cakesicle',
        img:'/images/image6.jpeg'
    },
    {
        name:'PAAN CHOCOLATE',
        price:250,
        desc:'paan chocolate',
        img:"/images/image7.jpeg"
        
    },

    {
        name:'COOKIE AND CREAM CHOCOLATE',
        price:250,
        desc:'cookie and cream chocolate',
        img:'/images/image5.jpeg'
    },
    {
        name:'CHOCOLATE BAR',
        price:150,
        desc:'chocolate bar',
        img:"/images/image16.jpg"
    },
    {
        name:'MIX FLAVOUR CHOCOLATES',
        price:200,
        desc:'mix flavour chocolates',
        img:'/images/image20.jpg'
    },
    {
        name:'MIX FLAVOUR CHOCOLATES',
        price:200,
        desc:'mix flavour chocolates',
        img:'/images/image22.jpeg'
    },
    {
        name:'MIX FLAVOUR CHOCOLATES',
        price:200,
        desc:'mix flavour chocolates',
        img:'/images/image21.jpeg'
    },
    {
        name:'MIX FLAVOUR CHOCOLATES',
        price:200,
        desc:'mix flavour chocolates',
        img:'/images/image24.jpeg'
    }
];


const seedDB=async()=>{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');

}

module.exports=seedDB;