import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const PricingOptions = [
        {id: '1', name: 'Free', price: 10, benefits: [
            'Limited Revision',
            'crazy deals',
            'Fantastic Deals',
            'Awesome Deals',
            'Great Deals' , 
            'Honestly Deals'
            ]},
        {id: '1', name: 'Regular', price: 19.90, benefits: [
            'Unlimited Revision',
            'crazy deals',
            'Fantastic Deals',
            'Awesome Deals',
            'Great Deals' , 
            'Honestly Deals'
            ] },
        {id: '1', name: 'Premium', price: 29.90, benefits: [
            'Unlimited Revision',
            'crazy deals',
            'Fantastic Deals',
            'Awesome Deals',
            'Great Deals' , 
            'Honestly Deals'
            ]}
    ]
    return (
        <div className= "font-mono bg-orange-500 text-white  p-4 mt-4">
            <h1 className= "font-bold text-2xl"> Best Pricing of the Town</h1>
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ab optio! Maiores labore dignissimos possimus delectus nemo, explicabo dicta error.</p>

          <div className="grid md:grid-cols-3 gap-4 mt-8">{
          PricingOptions.map(option => <PricingOption key={option.id} option = {option}></PricingOption>)
            }

              </div>  
            

        </div>
    );
};

export default Pricing;