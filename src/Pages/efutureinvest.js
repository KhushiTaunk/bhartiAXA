import React from 'react';
import Container from '@material-ui/core/Container';
import ActiveLastBreadcrumb from '../Components/eFutureInvestPage/Activebreadcrumb';
import SimpleCardStartBhartiAXA from '../Components/eFutureInvestPage/Simplecard(BhartiAxaStart)';
import SimpleCard4Reasons from '../Components/eFutureInvestPage/SimpleCard(4Reasons)';
import SimpleCardPlanDetails from '../Components/eFutureInvestPage/simplecard(PlanDetails)';
import TabsWrappedLabel from '../Components/eFutureInvestPage/tab';
import ContainedButtonsDowloadBrochure from '../Components/home page/ContainedButtonDownloadBrochure';
import { Grid } from '@material-ui/core';

export default function Efutureinvest() {
  return (
    <React.Fragment>

          <Container fixed>
           {/* Folder-Activebreadcrumb */}
          <ActiveLastBreadcrumb/>
          </Container>

            {/* Folder-Simplecard(BhartiAxaStart) */}
           <SimpleCardStartBhartiAXA/>

             {/* Folder-SimpleCard(4Reasons) */}
           <SimpleCard4Reasons/>

             {/* Folder-simplecard(PlanDetails) */}
            <SimpleCardPlanDetails/>

            <Container fixed>
             {/* Folder-tab */}
            <TabsWrappedLabel/>
            </Container>

             {/* Folder-ContainedButtonDownloadBrochure */}           
            <ContainedButtonsDowloadBrochure/>


    </React.Fragment>
  );
}