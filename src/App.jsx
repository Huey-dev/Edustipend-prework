import "./styles.css"

export default function App() {
  return (
    <div className="app">
      <div className="main-body">
      <div className="main-body">
        <div className="centeredText">
          <b>Make your party fun! </b> <br />
          Create your own custom playlist today!
        </div>
        <button className="create-playlist">Create playlist</button>
      </div>
        {/* main content */}
      </div>
      <div className="side-menu">
        <div className="menu_header">Trending Songs</div>
        <div className="sub_menu">
          <div className="sub_menu_item">Unavailable by Davido</div>
          <div className="sub_menu_item">Unavailable by Davido</div>
          <div className="sub_menu_item">Unavailable by Davido</div>
          <div className="sub_menu_item">Unavailable by Davido</div>
          <div className="sub_menu_item">Unavailable by Davido</div>
        </div>
        <button className="view-more">View more</button>
      </div>
    </div>
  );
}
