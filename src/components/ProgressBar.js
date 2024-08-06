import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
// import Footer from './Footer';  // Import the Footer component

const pages = [
  { path: '/', name: 'Page 1' },
  { path: '/page2', name: 'Page 2' },
  { path: '/page3', name: 'Page 3' },
];

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  transform: 'scaleX(-1)',
  '& .MuiLinearProgress-bar': {
    transform: 'scaleX(-1)',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${props.label}`}</Typography>
      </Box>
      <Box sx={{ width: '100%', ml: 1 }}>
        <StyledLinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const getProgressValue = (path) => {
  const pageIndex = pages.findIndex((page) => page.path === path);
  return ((pageIndex + 1) / pages.length) * 100;
};

const getPageName = (path) => {
  const page = pages.find((page) => page.path === path);
  return page ? page.name : '';
};

export default function ProgressBar() {
  const location = useLocation();
  // const navigate = useNavigate();
  const progress = getProgressValue(location.pathname);
  const label = getPageName(location.pathname);

 

  // const currentPageIndex = pages.findIndex((page) => page.path === location.pathname);

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <LinearProgressWithLabel value={progress} label={label} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        {[...pages].reverse().map((page) => (
          <Typography key={page.path} variant="body2" color="text.secondary">
            {page.name}
          </Typography>
        ))}
      </Box>
      
    </Box>
  );
}
