import React from "react";
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const MainText = ({ mainText }) => {
  const theme = useTheme();
  return (
        <Typography 
            variant="body1"
            sx={{ 
                mx: 'auto',
                textAlign:'center',
                maxWidth: 700,
                ...theme.title,
                lineHeight: 1.7,
                fontSize: '1.1rem'
            }}
            >
            {mainText}
        </Typography>
  );
};

MainText.propTypes = {
  mainText: PropTypes.node.isRequired,
};

export default MainText;
