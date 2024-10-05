import './App.css'
import Categories from './components/Categories'
import Delivery from './components/Delivery'
import Featured from './components/Featured'
import Meal from './components/Meal'
import NewsLetter from './components/NewsLetter'
import TopNav from './components/TopNav'
import TopPicks from './components/TopPicks'

function App() {

  return (
    <>
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <NewsLetter />
    </>
  )
}

export default App
