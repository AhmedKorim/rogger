import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Fade from "@material-ui/core/Fade/Fade";
import React, {Fragment} from "react";
import Spinner from "../../components/UI/Spinner/Spinner";

const withSpinner = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            loading: true
        };
        loaded = () => {
            this.setState({loading: false})
        }

        loading = () => {
            this.setState({loading: true})

        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.products.length === this.props.products.length) return;
            this.setState({loading: true})
        }

        componentDidMount() {
            if (this.props.products.length > 0) {
                this.setState({loading: false})
            }
        }

        componentDidUpdate(nextProps) {
            if (nextProps.products.length === this.props.products.length) return;
            this.setState({loading: false})
        }

        render() {
            return <Fragment>
                {this.state.loading && <Spinner/>}
                <Fade in={this.state.loading}>
                    <WrappedComponent {...this.props} hideSpinner={this.loaded} showSpinner={this.loading}/>
                </Fade>
            </Fragment>
        }
    }
}
export default withSpinner;