import './App.css'
import Categories from './components/Categories'
import Delivery from './components/Delivery'
import Featured from './components/Featured'
import Meal from './components/Meal'
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
    </>
  )
}

export default App
