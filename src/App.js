import React, { Component } from 'react';
import Character from './img/standard_medium100x100.jpg'
import './bluedot.css';

class App extends Component {
  render() {
    return (
        <div className="bloco text-center">
            <div className="row">
                <div className="col col-img">
                    <img src={Character} alt="Marvel"/>
                </div>
                <div className="col col-conteudo">
                    <div className="col">
                        <h3 className="marvel-text">A-Bomb (HAS)</h3>
                    </div>
                    <div className="col">
                        <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...
                                he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as 
                                strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling 
                                ball of destruction!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-img">
                    <img src="https://yt3.ggpht.com/-058HlQo6Dfc/AAAAAAAAAAI/AAAAAAAAAAA/h3mTqyvMa8E/s100-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="Marvel"/>
                </div>
                <div className="col col-conteudo">
                    <div className="col">
                        <h3 className="marvel-text">A-Bomb (HAS)</h3>
                    </div>
                    <div className="col">
                        <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...
                                he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as 
                                strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling 
                                ball of destruction!</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
