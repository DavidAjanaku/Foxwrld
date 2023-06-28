import React from 'react'
import Header from '../components/Header'
import Hamburger from '../components/Hamburger'
import MainPage from '../components/MainPage'
import MainPageSlider from '../components/MainPageSlider'

export default function Homepage() {
  return (
    <div >
        <Header/>
        <Hamburger/>
       <MainPageSlider/>
           <MainPage/>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias ab reprehenderit excepturi ullam illo dolorum asperiores repellat, id ratione, aspernatur sunt quam voluptatem, commodi ducimus iusto. Illo, velit aspernatur!
        </div>
    </div>
  )
}
