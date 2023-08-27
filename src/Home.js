import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import Location from './Location'
// ES7 snippets to do 'rcfe' shortcut command
function Home() {
  return (
    <div className='home'>
        <Location />
        <Banner/>

        <div className='home__section'>
          <Card src= " https://media.cntraveler.com/photos/60e630bb82d079b244790d58/16:9/w_2580,c_limit/airbnb%2024752152.jpeg" 
          title="Vacation Rentals" 
          description=" Unique activites we can do toeghter, led by a world of hosts"/>
          
          <Card src= "https://media.cntraveler.com/photos/589df60a9b67416638b3bf66/16:9/w_1280,c_limit/luxury-retreats-cr-courtesy.jpg" 
          title="Unique Stay" 
          description="Spaces that are moore than just a place to sleep"/>
          
          <Card src= "https://stylecaster.com/wp-content/uploads/2019/09/blue-jay-modern-airbnb.jpeg" 
          title="Entire homes" 
          description="Comfortable private places, with room for friends or family"/>
        
          <Card src= " https://www.mashvisor.com/blog/wp-content/uploads/2019/12/House-Hacking-with-Airbnb-How-to-Live-for-Free.jpg"
          title = " 4 Bedroom House"
          description=" Superhost with a stunning view of the beachside"
          price="$40/night"
          />

          <Card src= "https://static01.nyt.com/images/2020/09/28/travel/24airbnb-future-print/oakImage-1600867693149-superJumbo.jpg"
          title = "Middle of Nowhere"
          description="Check this out "
          price="$20/night"
          />

          <Card src= "https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/3/11/2/rx_airbnb_reginald-marshs-woodstock-ny-home.jpeg.rend.hgtvcom.616.411.suffix/1615497788554.jpeg"
          title = "1 Bedrrom Apartment"
          description="Great amenitites in the heart of Arizona and fabolous shopping complex nearby"
          price="$100/night"
          />
          
          
        </div>
        
    </div>
  )
}

export default Home