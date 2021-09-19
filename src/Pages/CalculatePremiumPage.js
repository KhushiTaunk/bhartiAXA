import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleCardcpPage from '../Components/SimpleCard(cpPage)';

export default function CalculatePremiumPage() {
  return (
    <React.Fragment>
        <Container fixed>

          {/* Folder-SimpleCard(cpPage) */}   
          <SimpleCardcpPage/>
          
        </Container>
    </React.Fragment>
  );
}