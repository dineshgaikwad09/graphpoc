import React from 'react';
import { Grid }  from '@material-ui/core';
import { NetworkGraphComponent } from './components/NetworkGraph/NetworkGraphComponent';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { DetailsComponent } from './components/Details/DetailsComponent';
import { useLocation } from 'react-router-dom';
import { QuicksightDashboard } from './components/QuicksightDashboard/QuicksightDashboard'; 
export function App() {
  const search = useLocation().search;
  const g = new URLSearchParams(search).get('g');
  if(g!=="0")
  {
    return (
      <div>     
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <QuicksightDashboard />
          </Grid>
        </Grid>
      </div>
    );
  }
  else
  {
    return (
      <div>     
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <HeaderComponent />
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <NetworkGraphComponent />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <DetailsComponent />
          </Grid>
        </Grid>

      </div>
    );
  }
}

// export class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <p>Product ID: {product_id}</p>
//         <Grid container spacing={1}>
//           <Grid item xs={12} sm={12} md={12}>
//             <HeaderComponent />
//           </Grid>
//           <Grid item xs={12} sm={9} md={9}>
//             <NetworkGraphComponent />
//           </Grid>
//           <Grid item xs={12} sm={3} md={3}>
//             <DetailsComponent />
//           </Grid>
//         </Grid>

//       </div>
//       );
//   }
// }
