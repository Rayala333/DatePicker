import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    image: null,
  });

  const [showImage, setShowImage] = useState(false);

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleUpload = () => {
    // Handle the upload logic here, you can use FormData to send the image to the server
    console.log('Image uploaded:', formData.image);

    // Set showImage to true to conditionally render the image
    setShowImage(true);
  };

  return (
    <div>
      {!showImage ? (
        <form>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <button type="button" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </form>
      ) : (
        <div>
          <img
            src={URL.createObjectURL(formData.image)}
            alt="Preview"
            style={{ marginTop: '10px', maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default MyForm;