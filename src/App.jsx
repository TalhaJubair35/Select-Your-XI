
import './App.css'
import navImg from './assets/logo.png'
function App() {


  return (
    <>
      <div class="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl"><img className='w-[60px]' src={navImg} alt="" /></a>
        </div>
        <div class="flex items-center">
          <span>6000000000 </span>
          <span>-Coins</span>
        </div>
      </div>
    </>
  )
}

export default App
