import './App.css';
import Card from './Card/Card.js';
import Button from './Button/Button.js';

function App() {

    return (

        <div className="appConatainer">
            <span className="wireLeft"></span>
            <span className="nail"></span>
            <span className="wireRight"></span>
            <div className="frame">
                <div className="blackBorder">
                    <Card />
                </div>
            </div>
            { <Button increment={1+(Math.random() * 0.25)} /> /*This is roughly the cumulative count of CO2 used (in grams) to load each endpoint estimated by using the site feature of api.websitecarbon.com, the randomness is for fun and saves CO2 by not pinging website carbon every single refresh :) */}
        </div>
    );
}

export default App;
