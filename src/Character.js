import React, { Component } from 'react';
import Pic from './img/standard_medium100x100.jpg';


class Character extends Component {
    constructor() {
        super();

        this.state = {
            exibirCharacter: false
        }
    }

    _handleClick(event) {
        event.preventDefault();
        this.setState({
            exibirCharacter: !this.state.exibirCharacter
        });
    }

    _handleDelete(event) {
        event.preventDefault();
        this.props.onDelete(this.props.id);
    }


    render() {
        let descricao, imagem;
        let textoBotao = 'Show Character';

        if(this.state.exibirCharacter) {
            descricao = <p>{this.props.descricao}</p>;
            imagem = <img src={this.props.imgUrl} alt="Marvel"/>;
            textoBotao = "Hide Character";
        }

        return (
            <div className="bloco grey dark">
                <div className="row">
                    <div className="col col-img text-center">
                        <div className="col">
                            {imagem}
                        </div>
                        <div className="col">
                            <a className="quadro blue dark white-text" href="#" onClick={this._handleClick.bind(this)}>{textoBotao}</a>
                        </div>
                    </div>
                    <div className="col col-conteudo">
                        <div className="col text-center">
                            <h3 className="marvel-text">{this.props.nome}</h3>
                        </div>
                        <div className="col">
                            {descricao}
                        </div>
                        <div className="col text-right">
                            <a className="quadro marvel-background white-text" href="#" onClick={this._handleDelete.bind(this)}>Excluir</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
}

export default Character;
