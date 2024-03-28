import {useEffect} from 'react'  
import {useLocation, useNavigate} from 'react-router-dom' 
import "./HomePage.scss"
import Team from "../../assets/Images1-Shapes.jpg"

function HomePage () {
    const navigate = useNavigate()
    const location = useLocation()

    //Logout functionality

    useEffect(() => {
        if (location.pathname === '/') {
              localStorage.removeItem('user Token:')
        }
    }, [location])
    //Redirection to the AI Assistance page
    const goToAiAssistancePage = () => {
        navigate('/aiassistance')
        window.scrollTo(0, 0)
    }
    return (
        <>
        <section className='hero'>
            <div className='hero__general-info'>
                <h1 className='hero__header'>AI Immigration Helper</h1>
                <p className='hero__Text'>Making the immigration process Easier, Faster, and Straightforward</p>
            </div>
          
        </section>
        <section className='about'>
            <h3 className='about__header'> About this website</h3>
            <div className='about__details'>
                <p className='about__Text'>
                This website is an Artificial Intelligence assistant for Canadian immigration legal process preparation facilitating and making faster that endeavor. 
                It also works as an educational source on how to efficiently go through the learning of Canadian immigration processes. The educational page have the intention
                to support the user in learning on best practices on how to search the Canada Government Immigration Website to improve internet literacy, it include links to other educational sites
                that could be relevant for immigrants like citizenship and languages study, it also include links to some immigration advisor offices here in Vancouver.
                </p>
                <p className='about__Text'> 
                Users can ask on the Artificial Intelligence Assistance page for a wide range of topics related to Canadian immigration processes
                and they will obtain answers that could be saved in the user's account and retrieve every time the user need to access to it, filtered or even downloaded as
                a pdf. This open a range of convenient possibilities because user can ask and receive answer in their native languages;
                can obtain bullet points or summarization of relevant topics; can go more in depth in certain convenient topics; 
                can process documents with complicate technical words and obtain a fairly reliable explanation in more simple terms or even in their native languages.
                </p>
            </div>
        </section>
        <section className='get-started'>
            <div className='get-started__subdivision'>
                <img src={Team} alt=" Team " className='get-started__Image'/>
            </div>
            
            <button className='get-started__button' onClick={goToAiAssistancePage}>Let's try it!</button>
            
        </section>
        </>
    )
}


export default HomePage;