import css from './Collections.module.css'

import rightArrow from '/icons/right-arrow.png'
import CathTheMatachImg from '/images/cathcthematch.jpg'
import NewInTownImg from '/images/newintown.jpg'
import TrendingThisWeekImg from '/images/trendingthisweek.jpg'

import CollectionsCard from '../../../utils/Cards/card2/CollectionsCard'

let Collections = () => {
    return <div className={css.outerDiv}>
        <div className={css.title}>Collections</div>
        <div className={css.tagLine}>
            <span className={css.desc}>Explore curated lists of Top Restaurants, Cafes, Pubs, and bars in Kochi, Based on trends</span>
            <span className={css.collectionPlacesTag}>All collections in Kochi <span className={css.rightArrowBox}><img className={css.rightArrow} src={rightArrow} alt="right arrow" /></span></span>
        </div>
        <div className={css.cards}>
            <CollectionsCard imgSrc={CathTheMatachImg} title="8 Places for Art Lovers" places="8" />
            <CollectionsCard imgSrc={NewInTownImg} title="14 Great Cafes" places="12" />
            <CollectionsCard imgSrc={TrendingThisWeekImg} title="Trending This Week" places="25" />
        </div>
    </div>
}

export default Collections;