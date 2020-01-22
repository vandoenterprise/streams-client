import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import history from '../../history';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <Fragment>
                <div onClick={() => this.props.deleteStream(id)} className="ui negative button">Delete</div>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        );
    };

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want delete this stream?';
        }

        return `Are you sure you want delete the stream with title: "${this.props.stream.title}"?`;
    }


    render() {
        return (
            <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => history.push('/')} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
