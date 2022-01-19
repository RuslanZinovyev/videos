import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
  };

  onSearchInputSubmit = async (searchInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchInput,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchInputSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
