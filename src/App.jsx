import NavBar from './components/navbar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
// import Footer from './components/Footer/Footer.jsx'

import './index.css'

function brek(j){
	let arr = []
	for(let i =0;i<j;i++){
		arr[i]=<br/>
	}
	return arr;
}

function App() {

		return <div className='app-container'>
			<header>
				<NavBar></NavBar>
			</header>

			<main>
				<Hero></Hero>
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
