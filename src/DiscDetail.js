import React, { Component } from 'react';
import { getDisc, getManufacturers, updateDisc } from './fetch-utils';
import classNames from 'classnames';
import './DiscDetail.css'
class DiscDetail extends Component {
    state = { 
        id: 0,
        disc: '',
        speed: 0,
        type: '',
        stable: true,
        plastics: '',
        manufacturer: '',
        manufacturers: [],
        message: '',
        error: false,
    };

    componentDidMount = async () => {
        const discId = this.props.match.params.id;
        const discData = await getDisc(discId);
        const manufacturers = await getManufacturers();
        this.setState({ ...discData, manufacturers});
    };
    //TODO
    getManufacturerId = () => {
        const manufacturersObj = this.state.manufacturers.find(
            (mn) => mn.name === this.state.manufacturer
        );
        return manufacturersObj.id;
    }
    //TODO
    handleUpdateDisc = async (e) => {
        e.preventDefault();
        const discData = {
            id: this.state.id,
            disc: this.state.disc,
            speed: this.state.speed,
            type: this.state.type,
            manufacturer_id: this.getManufacturerId(),
            stable: this.state.stable,
        }
        const data = await updateDisc(discData);
        if (data.error) {
            this.setState({ message: data.error, error: true});
        } else {
            this.setState({ message: 'Disc Updated', error: false });
            setTimeout(() => {
                this.setState({ message : '' });
            }, 1750);
        }
    }
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
                    <button onClick={this.handleUpdateDisc}>Update Disc</button>
                </form>
            </>
        );
    }
}
 
export default DiscDetail;