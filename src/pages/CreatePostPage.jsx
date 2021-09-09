import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

class MyEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
  }

  //   MyInput = () => {
  //   const [value, setValue] = useState('');
  //   const onChange = (evt) => setValue(evt.target.value);
  
  //   return <input value={value} onChange={onChange} />;
  // };

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

// ReactDOM.render(<MyEditor />, document.getElementById('container'));

export default MyEditor