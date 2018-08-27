import React, {Fragment} from 'react'
import Slide from "@material-ui/core/Slide/Slide";
import {connect} from "react-redux";
import ProductDetails from "../../layout/productDetails/ProductDetails";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {PRODUCT_CARD_DETAILS} from "../../../dux/actions/uiActions";
import ProductEditor from "../../../containers/Admin/Dashboard/AdminProducts/ProudctEditor/ProductEditor";
import PerfectScrollbar from "react-perfect-scrollbar";
import './dialog.scss'
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RDialog extends React.Component {
    handleClose = () => {
        this.props.close();
    };

    render() {
        const {open, data, component} = this.props;
        const componentToLoad = component === 'ProductDetails' ? <ProductDetails product={data}/> : <ProductEditor data={data}/>

        console.log(componentToLoad);
        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                fullWidth={true}
                maxWidth={false}
                className="dialog"
                PaperProps={{
                    classes: {
                        root: 'paperViable'
                    }
                }}
            >
                <div className="dialogWrapper">
                    <Tooltip title='close dialog'>
                        <Button variant="fab" color="secondary" className="dialogFloatButton" onClick={() => this.props.close()}>
                            <Icon>close</Icon>
                        </Button>
                    </Tooltip>
                    <PerfectScrollbar>
                        {data && componentToLoad}
                    </PerfectScrollbar>
                </div>
            </Dialog>
        )
    }

}

const mapStateToProps = state => {
    return {
        data: state.UI.dialog.data,
        component: state.UI.dialog.component,
        open: state.UI.dialog.open
    }
}
const mapDispatchToProps = dispatch => {
    return {
        close: () => dispatch({type: PRODUCT_CARD_DETAILS, payload: {open: false, activeCard: null}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RDialog);