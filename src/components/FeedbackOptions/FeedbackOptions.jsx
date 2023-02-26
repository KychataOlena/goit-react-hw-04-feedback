import { ButtonFeedback } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <ButtonFeedback
      name={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      key={option}
    >
      {option}
    </ButtonFeedback>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
