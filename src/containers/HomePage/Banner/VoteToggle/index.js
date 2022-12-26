import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

export default function ExampleTrackChild({Toggle}) {
  return (
    <Switch onChange={Toggle}
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography component="span" level="inherit" sx={{ ml: '10px', fontSize: '12px' }}>
                YES
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        '--Switch-thumb-size': '29px',
        '--Switch-track-width': '70px',
        '--Switch-track-height': '34px',
      }}
    />
  );
}