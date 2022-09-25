import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
          <span>
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
          </span>
        </div>
        <div className="writeFormGroup2">
          <textarea
            placeholder="write your post..."
            type="text"
            className="writeInput writeText"
          ></textarea>
          <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Write;
