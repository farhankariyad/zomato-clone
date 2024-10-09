import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular localities in and around </span> <span className={css.bld}> Kochi</span></div>
        <div className={css.placesCards}>
            <PlacesCard place="Kakkanad" count="509" link='' />
            <PlacesCard place="Edappally" count="366" link='' />
            <PlacesCard place="Fort Kochi" count="134" link='' />
            <PlacesCard place="MG Road" count="98" link='' />
            <PlacesCard place="Vyttila" count="134" link='' />
            <PlacesCard place="Panampilly Nagar" count="111" link='/' />
            <PlacesCard place="Kacheripady" count="123" link='/' />
            <PlacesCard place="Palarivattom" count="169" link='/' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;