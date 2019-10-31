import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    return (
        <div className="col-12 mb-5">
            <div className="row shadow">
                <div className="col-md-2 p-4">
                    <img src={props.image} alt="" style={{ width: '200px', objectFit: 'cover', position: 'relative', overflow: 'hidden', borderRadius: '5px' }} />
                </div>
                <div className="col-md-10 pl-5 pt-4">
                    <h4 className="font-weight-bold">{props.title} <span className="badge badge-danger" style={{ fontSize: '10px', verticalAlign: 'middle' }}>{props.kal} Kal</span></h4>
                    
                    <div className="font-weight-normal mb-0">Ingredients :</div>
                    <ol style={{ paddingLeft: '1.3em', color: '#555', fontSize: '14px', fontFamily: 'Arimo' }}>
                        { props.ingredients.map((ing, i) => (
                            <li style={{ marginTop: '5px' }} key={i}>{ing}</li>
                        )) }
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Recipe;