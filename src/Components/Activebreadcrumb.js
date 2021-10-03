import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


{/* Active last breadcrumb (Efutureinvest page) */}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/home" onClick={handleClick}>
        Home
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Life Insurance
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Investment Plans
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        eFuture Invest
      </Link>
    </Breadcrumbs>
  );
}
