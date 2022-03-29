import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name , price , benefits} = props.option;
    return (
        <div className=" bg-white text-gray-900 p-6 rounded-lg">
            <h2 className="bg-indigo-500 text-2xl text-white p-6 rounded-lg">{name}</h2>
            <p> <span className="text-4xl font-bold ">{price}</span><span className="text-gray-500 font-bold">/mo</span>
            </p>
            <div>
                <h2 className="text-left text-bold text-xl">
                    Benefits:
                </h2>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className="flex bg-green-600 text-white w-full mt-4 p-2 rounded-2xl hover:text-gray-500 font-bold justify-center" >Buy Now <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;