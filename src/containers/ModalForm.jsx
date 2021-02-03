import { connect } from "react-redux";
import ModalForm from "../components/ModalForm";
import { addData } from "../actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  newData: (data) => dispatch(addData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
