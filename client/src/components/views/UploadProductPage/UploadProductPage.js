import React, { useState } from "react";
import CommonFormBlock from "../../common/CommonFormBlock";
import CommonInput from "../../common/CommonInput";
import CommonButton from "../../common/CommonButton";
import CommonTextArea from "../../common/CommonTextArea";
import FileUpload from "../../common/FileUpload";
import axios from "axios";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const UploadPageBlock = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #828f76;
`;

const categories = [
  { key: 1, value: "top" },
  { key: 2, value: "bottom" },
  { key: 3, value: "shoes" },
  { key: 4, value: "etc" },
];

const UploadProductPage = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("top");

  const onChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const onChangeDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const onChangePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (!title || !description || !price || !images) {
      return alert("모든 값을 채워주세요!");
    }

    const body = {
      writer: props.user.userData._id,
      title: title,
      description: description,
      price: price,
      category: category,
      images: images,
    };

    axios
      .post("http://3.129.149.187:5000/api/product", body)
      .then((response) => {
        if (response.data.success) {
          alert("상품 업로드에 성공하였습니다.");
          props.history.push("/");
        } else {
          alert("상품 업로드에 실패하였습니다.");
        }
      });
  };

  return (
    <UploadPageBlock>
      <Helmet>
        <title>YTHFT - Product Upload</title>
      </Helmet>
      <CommonFormBlock width="60%">
        <form style={{ width: "95%" }} onSubmit={submitHandler}>
          <h1>PRODUCT UPLOAD</h1>
          <FileUpload refreshFunction={updateImages} />
          <CommonInput
            onChange={onChangeTitle}
            value={title}
            placeholder="Enter Product-name"
          />
          {/* <Title level={4}>Description</Title> */}
          <CommonTextArea
            onChange={onChangeDescription}
            value={description}
            rows={5}
            style={{ marginBottom: "2rem" }}
            placeholder="Enter Product-description"
          />
          <select
            onChange={onChangeCategory}
            value={category}
            style={{
              boxShadow:
                "inset 6px 6px 12px #6f7a64, inset -6px -6px 12px #96a488",
              width: "100%",
              background: "none",
              border: "none",
              marginBottom: "2rem",
              fontSize: "1.5rem",
              fontWeight: "bolder",
              padding: "1rem 1rem",
              borderRadius: "50px",
              color: "white",
            }}
          >
            {categories.map((item) => (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          <CommonInput
            type="number"
            onChange={onChangePrice}
            value={price}
            placeholder="Enter Price"
          />
          <CommonButton type="submit">UPLOAD</CommonButton>
        </form>
      </CommonFormBlock>
    </UploadPageBlock>
  );
};

export default UploadProductPage;
