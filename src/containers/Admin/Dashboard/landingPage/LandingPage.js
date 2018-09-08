import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import Pannel from "../../../../components/UI/Pannel/Pannel";
import './LandingPage.scss';
import CaroselSetting from "./CaroselSetting";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landingPageSettings">
                <Grid container alignItems="center" justify="center">
                    <Grid md={8} sm={11} item className="settingGrid">
                        <Pannel
                            heading="Carousel"
                        >
                            <CaroselSetting/>
                        </Pannel>
                        <Pannel
                            heading="Categories Cards"
                        >
                            <div>
                                Categories comming soon
                            </div>
                        </Pannel>
                        <Pannel
                            heading="Featured products"
                        >
                            <div>
                                Featured products comming soon
                            </div>
                        </Pannel>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;