import './App.css';
import Card from './Card/Card.js';
import Button from './Button/Button.js'

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
            <Button />
        </div>
    );
}

export default App;
