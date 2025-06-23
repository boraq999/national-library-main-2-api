import React from "react";
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const MainTitle = ({ mainTitle }) => {
  const theme = useTheme();
  return (
           <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              mx: 'auto',
              mb: 2,
              fontWeight: 700,
              ...theme.supTitle,
              textAlign:'center'
            }}
          >
            {mainTitle}
          </Typography>
  );
};

MainTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
};

export default MainTitle;
