import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  //1st param is an object of a bunch different actionCreators
  //2nd param is dispatch function
  //returns - an object of all the different actionCreators that we provided in the first param.
  // wit hthe dispatch ready to go.
  return bindActionCreators(actionCreators, dispatch);
};
