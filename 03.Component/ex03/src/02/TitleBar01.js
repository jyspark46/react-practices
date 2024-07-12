import React, {Component} from 'react';

export default class TitleBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(event) {
        console.log('TitleBar01: click !!');
    }

    render() {
        return (
            <div>
                <h4 onClick={this.onClickHandler}>
                    Function Handler in Class Component(click here!)
                </h4>
            </div>
        );
    }
}