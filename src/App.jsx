import NavBar from './components/navbar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
// import Footer from './components/Footer/Footer.jsx'

import './index.css'
import TargetCursor from './components/Cursor/TargetCursor.jsx'

function brek(j){
	let arr = []
	for(let i =0;i<j;i++){
		arr[i]=<br key={i}/>
	}
	return arr;
}

function App() {

		return <div className='app-container'>

			<TargetCursor 
				spinDuration={2}
				hideDefaultCursor
				parallaxOn
				hoverDuration={0.2}
			/>

			<header>
				<NavBar></NavBar>
			</header>

			<main>
				<Hero/>
				<About/>
				{
					brek(100)
				}
			</main>

			<footer>
				{/* <Footer></Footer> */}
			</footer>
		</div>
}

export default App
