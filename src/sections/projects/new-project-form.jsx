import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { doc, setDoc, collection } from 'firebase/firestore';
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';

import { db } from 'src/firebase/firebase'; // Import the Firestore instance
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';

import {
  Stack,
  Button,
  Checkbox,
  TextField,
  CircularProgress,
  FormControlLabel,
} from '@mui/material';

import { fDate } from 'src/utils/format-time';

Quill.register('modules/imageResize', ImageResize);

const NewProjectForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requiresFunding, setRequiresFunding] = useState(false);
  const [goalAmount, setGoalAmount] = useState('');

  const editorStyles = {
    height: '300px', // Default height
    width: '100%', // Full width by default
    overflow: 'auto', // Make the editor scrollable
  };

  const handleChange = (html) => {
    setContent(html);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    setSelectedImage(selectedFile);
  };

  const handleFundingChange = (event) => {
    setRequiresFunding(event.target.checked);
    if (!event.target.checked) {
      setGoalAmount('');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      if (!selectedImage) {
        alert('Please select an image');
        setIsSubmitting(false);
        return; // Handle missing image
      }
      const docRef = doc(collection(db, 'projects'));
      const storage = getStorage(); // Initialize Firebase Storage
      const storageRef = ref(storage, `posts/${selectedImage.name}`); // Create a reference with product name
      await uploadBytes(storageRef, selectedImage);
      const downloadURL = await getDownloadURL(storageRef);

      await setDoc(docRef, {
        id: docRef.id,
        cover: downloadURL,
        title,
        content,
        createdAt: fDate(new Date()),
        raisedAmount: 0,
        goalAmount,
      });

      console.log('Product added with ID:', docRef.id);
      onClose(); // Close the dialog
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle errors appropriately, e.g., display user-friendly messages
    } finally {
      setIsSubmitting(false);
    }
  };

  const modules = {
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

  const formats = [
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

  return (
    <form>
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
        />

        <FormControlLabel
          control={<Checkbox checked={requiresFunding} onChange={handleFundingChange} />}
          label="This project requires funding"
        />

        {requiresFunding && (
          <TextField
            label="Goal Amount"
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            fullWidth
            required
          />
        )}

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
              value={content}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              bounds=".quill-wrapper"
              placeholder="Write here"
              required
            />
          </div>
        </>

        <Stack direction="row" spacing={2} style={{ marginTop: '20px' }}>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={24} /> : 'Add Project'}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

NewProjectForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default NewProjectForm;
