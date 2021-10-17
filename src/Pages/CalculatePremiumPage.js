import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCardcpPage from '../Components/calculatePremiumPage/SimpleCard(cpPage)';
import { Grid } from '@material-ui/core';
import SimplePaperDisclaimer from '../Components/calculatePremiumPage/DisclaimerCPpage';

export default function CalculatePremiumPage() {
  return (
    <React.Fragment>

        <Container fixed>
          {/* Folder-SimpleCard(cpPage) */}   
          <SimpleCardcpPage/>
          <SimplePaperDisclaimer/>
        </Container>

    </React.Fragment>
  );
}