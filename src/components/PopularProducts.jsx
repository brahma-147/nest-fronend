import React from 'react'
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';
import product5 from '../assets/product-5.jpg';
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function PopularProducts() {
    
    const dummyData = [
        {
            id: 1,
            foodType: 'Snack',
            food: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
            rating: 4,
            company: 'NestFood',
            price: '28.85',
            originalPrice: '32.8',
            orderType: 'Hot',
            image: product1
        },
        {
            id: 2,
            foodType: 'Hodo Foods',
            food: 'All Natural Italian-Style Chicken Meatballs',
            rating: 3,
            company: 'Stouffer',
            price: '52.85',
            originalPrice: '55.8',
            orderType: 'New',
            image: product2
        },
        {
            id: 3,
            foodType: 'Snack',
            food: "Angie's Boomchikcapop Sweet & Salty Kettle Corn",
            rating: 4,
            company: 'StarKist',
            price: '48.85',
            originalPrice: '52.8',
            orderType: 'Sale',
            image: product3
        },
        {
            id: 4,
            foodType: 'Vegetables',
            food: "Foster Farms Takeout Crispy Classic Buffalo Wings",
            rating: 4,
            company: 'NestFood',
            price: '17.85',
            originalPrice: '19.8',
            orderType: '',
            image: product4
        },
        {
            id: 5,
            foodType: 'Pet Foods',
            food: "Blue Diamond Almonds Lightly Salted Vegetables",
            rating: 4,
            company: 'NestFood',
            price: '23.85',
            originalPrice: '25.8',
            orderType: '-14%',
            image: product5
        },
    ];

    return (
        <div className='flex-1 bg-white px-5 mb-10'>
            <div className=''>
                <h1 className='text-3xl text-black font-semibold py-5 lg:py-10 md:py-10'>Popular products</h1>
            </div>

            <div className='grid md:grid-cols-3 lg:grid-cols-5 justify-center'>
                {dummyData.map((item) => {
                    return (
                        <div className='flex-1 md:mb-5 w-[300px] md:w-[250px] lg:w-[250px] border rounded-2xl hover:shadow-md mb-5' key={item.id}>
                            <div className='flex mb-2'>
                                <h2 className={`${item.orderType === 'Hot' ? 'bg-[#F74B81]' : item.orderType === 'Sale' ? 'bg-[#67BCEE]': item.orderType === 'New' ? 'bg-[#3BB77E]' : item.orderType === '' ? 'bg-transparent': 'bg-[#F59758]'} px-5 py-[5px] rounded-tl-2xl rounded-br-2xl text-white text-sm font-semibold`}>{item.orderType}</h2>
                            </div>

                            <div className='flex justify-center '>
                                <img src={item.image} alt='not found' className='h-[200px] w-[200px] lg:h-[200px] lg:w-[200px] md:h-[180px] md:w-[180px] p-3' />
                            </div>

                            <div className='flex-col px-5 h-[140px]'>
                                <p className='text-[12px] font-semibold text-gray-400 mb-2'>{item.foodType}</p>
                                <p className='text-[16px] leading-5 font-bold text-[#000]  mb-2'>{item.food}</p>
                                <div className='flex gap-2 items-center mb-2'>
                                    <div className='flex gap-[1px] items-center'>
                                        {[...Array(item.rating)].map((_, index) => (
                                            <FaStar name='star' size={14} className='text-yellow-500' key={index} />
                                        ))}
                                    </div>
                                    <p className='text-xs text-black font-semibold'>{`(${item.rating})`}</p>
                                </div>
                                <div className='flex gap-1 items-center  mb-2'>
                                    <p className='text-[12px] font-semibold  text-gray-400'>By</p>
                                    <p className='text-[12px] font-semibold duration-700 hover:text-[#FDC040] text-[#3BB77E] cursor-pointer'>{item.company}</p>
                                </div>
                            </div>

                            <div className='px-5 flex justify-between items-center mb-6 '>
                                <div className='flex gap-3'>
                                    <p className="text-[16px] leading-5 font-bold text-[#3BB77E]">${item.price}</p>
                                    <p className="text-[12px] leading-5 font-bold text-gray-400 line-through">${item.originalPrice}</p>
                                </div>
                                <button className='flex items-center duration-300 hover:-translate-y-1 bg-[#DEF9EC] px-4 py-[8px] rounded-md gap-1 group hover:bg-[#3bb77e]'>
                                    <IoCartOutline className='text-[#3bb77e] group-hover:text-white' />
                                    <p className="text-[12px] font-semibold text-[#3bb77e] group-hover:text-white">Cart</p>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PopularProducts;