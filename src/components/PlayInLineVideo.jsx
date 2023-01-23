import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default class PlayInLineVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            src: this.props.videos[0]
        };
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        this.videoRef.current.addEventListener("ended", e => {
            if (this.state.index < this.props.videos.length - 1) {
                let nextIndex = this.state.index + 1;
                this.setState({
                    index: nextIndex,
                    src: this.props.videos[nextIndex]
                });
            }
        });
    }
    componentDidUpdate() {
        this.videoRef.current.play();
    }

    render() {
        return (
            <video
                ref={this.videoRef}
                className=' border-4 border-green-400'
                preload="metadata"
                poster="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg"
                loop
                autoPlay
                playsInline
                muted={true}
            >
                <source src={this.state.src} />
            </video>
        );
    }
}


