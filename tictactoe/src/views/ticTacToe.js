import { connect } from "react-redux";
import tictactoeUI from "../components/ticTacToeUI";
import { setValue } from "../actions/setValues";
import { reset } from "../actions/reset";
const mapStateToProps = state => {
  return {
    squares: state.squares,
    xisNext: state.xIsNext
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (index, xIsNext) => {
      dispatch(setValue(index, xIsNext));
    },

    resetGame: () => {
      dispatch(reset());
    }
  };
};

const EnhancedTicTacToe = connect(
  mapStateToProps,
  mapDispatchToProps
)(tictactoeUI);

export default EnhancedTicTacToe;
