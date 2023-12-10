import { Link } from 'react-router-dom';
import { BoxInfo } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <BoxInfo>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
    </BoxInfo>
  );
};
