import { ThreeDots } from 'react-loader-spinner';
import { Box } from 'components/Box';

export const Loader = () => {
  return (
  <Box display='flex' justifyContent='center'>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color= '#ff0066'
      ariaLabel="three-dots-loading"
      visible={true}
      />
      </Box>
  );
};
