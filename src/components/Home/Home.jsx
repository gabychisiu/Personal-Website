import "./styles.css";

export const Home = () => {
  return (
    <div id="app">
      <div className="title">
        <div className="title-inner">
          <div className="cafe">
            <div className="cafe-inner">Hello,</div>
          </div>
          <div className="mozart">
            <div className="mozart-inner">I'm Gabriel.</div>
          </div>
        </div>
      </div>

      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>

      <p>
        I am a fresh Web Developer <span>&</span> I recently transitioned from writing code for CNC milling machines to writing code that runs in browsers.
      </p>

    </div>
  );
};
