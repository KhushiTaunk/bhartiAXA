import React from 'react';
import Container from '@material-ui/core/Container';
import ActiveLastBreadcrumb from '../Components/Activebreadcrumb';
import SimpleCardStartBhartiAXA from '../Components/Simplecard(BhartiAxaStart)';
import SimpleCard4Reasons from '../Components/SimpleCard(4Reasons)';
import SimpleCardPlanDetails from '../Components/simplecard(PlanDetails)';
import TabsWrappedLabel from '../Components/tab';
import ContainedButtonsDowloadBrochure from '../Components/ContainedButtonDownloadBrochure';

export default function Efutureinvest() {
  return (
    <React.Fragment>
        <Container fixed>
          <ActiveLastBreadcrumb/>
           <SimpleCardStartBhartiAXA/>
           <SimpleCard4Reasons/>
            <SimpleCardPlanDetails/>
            <TabsWrappedLabel/>
            <ContainedButtonsDowloadBrochure/>
            <p>
                
            </p>
          
        </Container>
    </React.Fragment>
  );
}