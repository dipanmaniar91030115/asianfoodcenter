

class CommentApp extends React.Component {
    constructor () {
        super();
        this.state = {
            comments: []
        }
    }

    handleSubmitComment (comment) {
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                onSubmit = {this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

class CommentInput extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(){
        if (this.props.onsubmit) {
            const {username, content} =this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({content: ''})
    }
    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>Name：</span>
                    <div className='comment-field-input'>
                        <input  value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>Content：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        post
                    </button>
                </div>
            </div>
        )
    }
}

class CommentList extends React.Component {

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}

class Comment extends React.Component {
    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <CommentApp/>,
    document.getElementById('root')
);

