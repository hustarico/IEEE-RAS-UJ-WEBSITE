import './NavBar.css'
// import logo from '../../assets/IEEE-RAS/IEEE_RAS_logo_colored.png'
import logo from '../../assets/IEEE-RAS/ras-logo-custom1.png'

const NavLinks = [
    {
        name:"Home",
        href:"#home"
    },
    {
        name:"About us",
        href:"#about-us",
        children:[
            {
                name:"Who are we",
                href:"#who"
            },
            {
                name:"Us in numbers",
                href:"#numbers"
            },
            {
                name:"Our goals",
                href:"#goals"
            },
            {
                name:"Out teams",
                href:"#teams"
            },
            {
                name:"Committee and leaders",
                href:"#leaders"
            },
            {
                name:"Starts of the month",
                href:"#stars"
            },
            {
                name:"FAQ",
                href:"#faq"
            }
        ]
    },
    {
        name:"Events",
        href:"#events"
    },
    {
        name:"News",
        href:"#news"
    },
]

const SocialLinks = [
    {   
        name:"instagram link",   
        href:"https://www.instagram.com/ieee.cs.ju/",
        ariaLabel:"our instagram page",
        svg:"M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
    },
    {   
        name:"facebook link",
        href:"https://www.facebook.com/IEEECSJU",
        ariaLabel:"our facebook page",
        svg:"M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z"
    },
    {   
        name:"linkedin link",
        href:"https://www.linkedin.com/in/ieee-computer-society-ju-3bb5a3258",
        ariaLabel:"our linkedin page",
        svg:"M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803"
    },
]

export default function NavBar(){

    return <div className='navbar'>
        
        <div className='logo-container'>
            <a href="#home">
                <img src={logo} alt="IEEE RAS UJ LOGO" />
            </a>
        </div>

        {/* <div className="nav-actions"> */}

            <ul className='nav-links'>
                {NavLinks.map(link=>{
                    return <li key={link.name}><a href={link.href}>{link.name}</a></li>
                })}
            </ul>

            <div className="social-links">
                {
                    SocialLinks.map(link=>{
                        return (
                            <a key={link.name} class="header__social-icon-wrapper" href={link.href} target="_blank" aria-label={link.ariaLabel}>
                                <svg class="header__social-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d={link.svg}></path>
                                </svg>
                            </a>
                        )
                    })
                }
                
            </div>
        {/* </div> */}
    </div>
}