import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDiscs } from './fetch-utils';

class DiscList extends Component {
    state = { discs: [] };
    componentDidMount = async () => {
        const data = await getDiscs();
        this.setState({ discs: data });
    };    
    render() { 
        return (
            <section className='disc-list'>
                {this.state.discs.map((d) => (
                    <div key={d.id} className='disc-card'>
                        <h2>
                            <Link to={`/discs/${d.id}`}>{d.disc}</Link>
                        </h2>
                        <p>
                            The {d.disc} is a {d.type}, it's a speed {d.speed} disc and it's made by {d.manufacturer}.
                        </p>
                    </div>
                ))}
            </section>
        );
    }
}
 
export default DiscList;