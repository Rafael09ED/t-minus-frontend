import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Link = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

function Home() {
  return (
      <div>
          <h1>Home</h1>
          <Button component={Link} to='/list'>List</Button>
          <Button component={Link} to='/create'>Create</Button>
      </div>
  );
}

export default Home;
