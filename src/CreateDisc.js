import React, { Component } from 'react';
import { getManufacturers } from './fetch-utils';
import './CreateDisc.css';
class CreateDisc extends Component {
    state = { 
        disc: '',
        speed: 0,
        type: '',
        stable: true,
        manufacturer: 'Innova',
        manufacturers: [],
        message: '',
        error: false,
    };
    componentDidMount = async () => {
        const manufacturers = await getManufacturers();
        this.setState({manufacturers});
    }
    render() { 
        return (
            <article>
                <h1>Create New Disc</h1>
                <form id='create-disc'>
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
                                    <option key={mn.name} value={mn.name}>{mn.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </article>
        );
    }
}
 
export default CreateDisc;