import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import axios from "axios";

const ImageUploadWrapper = styled.div`
  display: flex;
  width: 100%;
  /* background: #e0e5ec; */
  background: none;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledDropzone = styled.div`
  width: 30%;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* background: #e0e5ec; */
  background: none;
  box-shadow: 6px 6px 6px #6f7a64, -6px -6px 12px #96a488;
  margin-bottom: 2rem;

  &:hover {
    box-shadow: inset 6px 6px 6px #6f7a64, inset -6px -6px 12px #96a488;
  }
`;

const UploadImagesList = styled.div`
  display: flex;
  width: 65%;
  height: 14rem;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  border-radius: 10px;
  box-shadow: inset 12px 12px 24px #6f7a64, inset -12px -12px 24px #96a488;

  img {
    border-radius: 10px;
    min-width: 13rem;
    width: 13rem;
    height: 13rem;
  }

  .img-box {
    margin-right: 1rem;
    position: relative;
    .close-btn {
      visibility: hidden;
      position: absolute;
      top: 5%;
      right: 5%;
    }

    &:hover .close-btn {
      visibility: visible;
    }
  }
`;

const FileUpload = (props) => {
  const [images, setImages] = useState([]);

  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    axios
      .post("http://3.129.149.187:5000/api/product/image", formData, config)
      .then((response) => {
        if (response.data.success) {
          setImages([...images, response.data.filePath]);
          props.refreshFunction([...images, response.data.filePath]);
        } else {
          alert("fail");
        }
      });
  };

  const deleteHandler = (image) => {
    const currentIndex = images.indexOf(image);

    const newImages = [...images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <ImageUploadWrapper>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <StyledDropzone {...getRootProps()}>
            <input {...getInputProps()} />
            <PlusOutlined style={{ fontSize: "3rem", color: "white" }} />
          </StyledDropzone>
        )}
      </Dropzone>
      <UploadImagesList>
        {images.map((image, index) => (
          <div
            className="img-box"
            key={index}
            onClick={() => deleteHandler(image)}
          >
            <img src={`http://3.129.149.187:5000/${image}`} alt={image} />
            <div className="close-btn">
              <CloseOutlined style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        ))}
      </UploadImagesList>
    </ImageUploadWrapper>
  );
};

export default FileUpload;
