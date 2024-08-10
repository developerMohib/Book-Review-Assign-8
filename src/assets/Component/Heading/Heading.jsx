import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';

const Heading = ({heading}) => {
    return (
        <Helmet>
        <title> {heading} - Book Review From User </title>
      </Helmet>
    );
};
Heading.propTypes = {
    heading : PropTypes.string ,
}

export default Heading;