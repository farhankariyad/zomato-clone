import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard'

import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let chain = ['Burger King', 'KFC', 'McDonalds', 'Pizza Hut', 'WOW! Momo']
    let chain1= ['Delhi', 'Bengaluru' , 'Chennai' , 'Mumbai' , 'Pune' , 'Hyderabad' , 'Kochi' , 'Goa']
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Explore options near me</div>
            <div className={css.cards}>   
                <CollapsableCard title="Top Restaurant Chains" content={chain} />
                <CollapsableCard title="Cities We Deliver To" content={chain1} />
            </div>
        </div>
    </div>
}

export default ExploreOptionsNearMe;