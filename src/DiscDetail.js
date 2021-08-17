import React, { Component } from 'react';
import { getDisc, getManufacturers } from './fetch-utils';

class DiscDetail extends Component {
    state = { 
        id: 0,
        disc: '',
        speed: 0,
        type: '',
        stable: null,
        plastics: '',
        manufacturers: []
    };

    componentDidMount = async () => {
        const discId = this.props.match.params.id;
        const discData = await getDisc(discId);
        const manufacturers = await getManufacturers();
        this.setState({ ...discData, manufacturers});
    };
    render() { 
        return (
            <>
                <h1>{this.state.disc}</h1>
                <form id='update-disc'>
                    <div className='form-group'>
                        <label>Disc: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ disc: e.target.value });
                            }}
                            type='text'
                            value={this.state.disc}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Speed: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ speed: e.target.value });
                            }}
                            type='text'
                            value={this.state.speed}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Type: </label>
                        <input
                            onChange={(e) => {
                                this.setState({ type: e.target.value });
                            }}
                            type='text'
                            value={this.state.type}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Stable: </label>
                        <select>
                            <option>true</option>
                            <option>false</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Manufacturer: </label>
                        <select>
                            {this.state.manufacturers.map((mn) => {
                                return (
                                    <option value={mn.name}>{mn.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
            </>
        );
    }
}
 
export default DiscDetail;