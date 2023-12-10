import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Sorry! Page not found! Please use this <Link to="/">Link</Link> to
      navigate to our home page!
    </div>
  );
};

export default NotFound;
