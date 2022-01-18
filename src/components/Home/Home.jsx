import "./styles.css";

export const Home = () => {
  return (
    <div id="app">
      <div className="title">
        <div className="title-inner">
          <div className="cafe">
            <div className="cafe-inner">Salut,</div>
          </div>
          <div className="mozart">
            <div className="mozart-inner">sunt Gabriel.</div>
          </div>
        </div>
      </div>

      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>

      <a
        href="https://youtu.be/mBY62jtbMYM"
        target="_blank"
        data-keyframers-credit
        style={{ color: "black" }}
      ></a>
      <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>
    </div>
  );
};
