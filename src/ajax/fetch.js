import React from 'react';

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?character=';

export default class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        };
    }
    componentDidMount() {
        this._getQuotes();
    }
    componentDidUpdate(prevProps){
        if(this.props.character !== prevProps.character){
            this._getQuotes();
        }
    }
    async _getQuotes() {
        const res = await fetch(url + encodeURIComponent(this.props.character));
        const body = await res.json();
        this.setState({
            quotes: body
        });
    }
    render() {
        return (
            <div>
                <h1>{this.props.character}</h1>
                <ul>
                    {this.state.quotes.map((quote) => {
                        const styles = {}
                        if(quote.characterDirection.toLowerCase() === 'right'){
                            styles.transform  = 'rotateY(180deg)';
                        }
                        return (
                            <li key={quote.quote}>
                                <img style={styles} src={quote.image} alt=""/>
                                <span>{quote.quote}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
