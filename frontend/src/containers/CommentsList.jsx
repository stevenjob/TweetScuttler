import { connect } from 'react-redux';
import ChatList from '../components/ChatList.jsx';

const mapStateToProps = (state) => ({ comments: state.comments });

const CommentsList = connect(mapStateToProps)(ChatList);

export default CommentsList;
