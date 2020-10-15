import React from 'react';

// function Detail(props) {
//     console.log(props.location);
//     return <span>hello</span>;
// }

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // console.log(location.state);
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
