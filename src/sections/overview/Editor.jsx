import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

/*
 * Simple editor component that takes placeholder text as a prop
 */
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    console.log(html);
  }

  render() {
    const { editorHtml } = this.state;
    const { placeholder } = this.props;
    const editorStyles = {
      height: '300px', // Default height
      width: '100%', // Full width by default
    };

    return (
      <>
        <style>
          {`
            @media (min-width: 768px) {
              .quill-wrapper {
                height: 400px; // Larger height on larger screens
              }
            }
          `}
        </style>
        <div className="quill-wrapper" style={editorStyles}>
          <ReactQuill
            theme="snow"
            onChange={this.handleChange}
            value={editorHtml}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds=".quill-wrapper"
            placeholder={placeholder}
          />
        </div>
      </>
    );
  }
}

Editor.propTypes = {
  placeholder: PropTypes.string,
};

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize'],
  },
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default Editor;
