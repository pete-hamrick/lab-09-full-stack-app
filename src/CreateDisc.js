import React, { Component } from 'react';
import { getManufacturers, createDisc } from './fetch-utils';
import './CreateDisc.css';
import classNames from 'classnames';
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
        this.setState({ manufacturers});
    };
    getManufacturerId = () => {
        const manufacturersObj = this.state.manufacturers.find(
            (mn) => mn.name === this.state.manufacturer
        );
        return manufacturersObj.id;
    };

    handleCreateDisc = async (e) => {
        e.preventDefault();
        const discData = {
            disc: this.state.disc,
            speed: this.state.speed,
            type: this.state.type,
            manufacturer_id: this.getManufacturerId(),
            stable: this.state.stable,
        }
        const data = await createDisc(discData);
        if (data.error) {
            this.setState({ message: data.error, error: true});
        } else {
            this.props.history.push('/');
        }
    };
    render() { 
        return (
            <>
                {this.state.message && (
                    <div 
                        className={classNames({
                            message: true,
                            error: this.state.error,
                            success: !this.state.error,
                        })}
                    >{this.state.message}</div>
                )}
                <h1>{this.state.disc}</h1>
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
                        <select 
                            value={this.state.stable}
                            onChange={(e) => {
                                this.setState({ stable: e.target.value });
                            }}    
                        >
                                <option>true</option>
                                <option>false</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Manufacturer: </label>
                        <select 
                            value={this.state.manufacturer}
                            onChange={(e) => {
                                this.setState({ manufacturer: e.target.value });
                            }}
                        >
                            {this.state.manufacturers.map((mnfr) => {
                                return (
                                    <option key={mnfr.name} value={mnfr.name}>{mnfr.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button onClick={this.handleCreateDisc}>Create Disc</button>
                </form>
            </>
        );
    }
}
 
export default CreateDisc;