import React, { Component } from 'react';
import './grid.css';

var Grille = [{
title: 'MDR',
img: ''
},
{
title: 'LOL',
img: ''
},
{
title: 'XD',
img: ''
},
{
title: 'PTDR',
img: ''
},
{
title: 'XPTDR',
img: ''
},
{
title: '^^',
img: ''
},
{
title: '><',
img: ''
}
];

class Grid extends Component {
  render() {
    return (
      <div className="grid">
		{Grille.map((titre) => {
			return (<div className="tab">{titre.title}</div>
			)
		})}      	
      </div>
    );
  }
}

export default Grid;