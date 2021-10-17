import React from 'react';
import Container from '@material-ui/core/Container';
import ActiveLastBreadcrumb from '../Components/eFutureInvestPage/Activebreadcrumb';
import SimpleCardStartBhartiAXA from '../Components/eFutureInvestPage/Simplecard(BhartiAxaStart)';
import SimpleCard4Reasons from '../Components/eFutureInvestPage/SimpleCard(4Reasons)';
import SimpleCardPlanDetails from '../Components/eFutureInvestPage/simplecard(PlanDetails)';
import TabsWrappedLabel from '../Components/eFutureInvestPage/tab';
import ContainedButtonsDowloadBrochure from '../Components/home page/ContainedButtonDownloadBrochure';


export default function Efutureinvest() {
  return (
    <React.Fragment>
        <Container fixed>

           {/* Folder-Activebreadcrumb */}
          <ActiveLastBreadcrumb/>

            {/* Folder-Simplecard(BhartiAxaStart) */}
           <SimpleCardStartBhartiAXA/>

             {/* Folder-SimpleCard(4Reasons) */}
           <SimpleCard4Reasons/>

             {/* Folder-simplecard(PlanDetails) */}
            <SimpleCardPlanDetails/>

             {/* Folder-tab */}
            <TabsWrappedLabel/>

             {/* Folder-ContainedButtonDownloadBrochure */}           
            <ContainedButtonsDowloadBrochure/>


            
        </Container>
    </React.Fragment>
  );
}