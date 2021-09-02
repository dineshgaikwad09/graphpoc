import { ACTIONS } from '../constants';

const initialState = {
  host: 'database-1-safetygraph-instance-1.cmlqz8yt3jxv.us-east-1.neptune.amazonaws.com',
  port: '8182',
  query: 'g.V().has("Mine","STATE","WY").inE().as("e").outV().hasLabel("Operator").dedup().by("OPERATOR_NAME").bothE().bothV().limit(6)',
  error: null
};

export const reducer =  (state=initialState, action)=>{
  switch (action.type){
    case ACTIONS.SET_HOST: {
      return { ...state, host: action.payload }
    }
    case ACTIONS.SET_PORT: {
      return { ...state, port: action.payload }
    }
    case ACTIONS.SET_QUERY: {
      return { ...state, query: action.payload, error: null }
    }
    case ACTIONS.SET_ERROR: {
      return { ...state, error: action.payload }
    }
    default:
      return state;
  }
};
