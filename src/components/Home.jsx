import '../css/Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home()  {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <img id='landing-img' src='./images/home.jpg' alt="home page"></img>


            <button id='add-list' onClick={() => navigate('/')}>ჩანაწერის დამატება</button>
            <button id='get-list' onClick={() => navigate('/list')}>ჩანაწერების სია</button>

        </div>
    )
}

