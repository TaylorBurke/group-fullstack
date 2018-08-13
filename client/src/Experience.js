import React, { Component } from 'react';
import Line from './Line';
import BarText from './BarText';
import Bar from './Bar';

class Experience extends Component {
    state = {

    }

    renderLines() {

        return Array(10).fill(null).map((el, i) => (
            <Line
                left={i * 10}
                key={i}
            />
        ))
    }


    render() {
        return (
            <div className="graph-wrapper">
                <div className="graph">
                <Bar percent={86} />
                
                    <BarText />
                        <div className ="bar-lines-container">
                        {this.renderLines()}

                        
                        </div>


                    
                </div>

            </div>
        )
    }
}

export default Experience;