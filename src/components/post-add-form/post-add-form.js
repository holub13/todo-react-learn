import React from "react";
import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Чем хочешь поделиться?"
        className="form-control new-post-lable"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;