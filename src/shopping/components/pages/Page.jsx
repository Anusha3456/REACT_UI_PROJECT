import React ,{ useState}from 'react'

import Headerr from '../Headerr'
import Bannerr from '../Bannerr'
import Collectionn from '../Collectionn'
import Footerr from '../Footerr'
import {Gents,Ladies} from '../data'
import Womenscollection from '../Womenscollection'


function Page() {
 const [gentsFashion,setgetsFashion]=useState(Gents)
 const [ladiesFashion,setadiesFashion]=useState(Ladies)
  return (
    <div>
     <Headerr />
     <Bannerr />
     <Collectionn  gentsFashion={gentsFashion}/>
     <Womenscollection  ladiesFashion={ladiesFashion}/>
     <Footerr />

    </div>
  )
}

export default Page

