import { connect } from "react-redux";
import DataTable from "../components/DataTable";

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
