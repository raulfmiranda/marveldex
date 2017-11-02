import React, { Component } from 'react';
import Pic from './img/standard_medium100x100.jpg';


class Character extends Component {
    render() {

        return (
            <div className="bloco text-center">
                <div className="row">
                    <div className="col col-img">
                        <img src={this.props.imgUrl} alt="Marvel"/>
                    </div>
                    <div className="col col-conteudo">
                        <div className="col">
                            <h3 className="marvel-text">{this.props.nome}</h3>
                        </div>
                        <div className="col">
                            <p>{this.props.descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
}

export default Character;
