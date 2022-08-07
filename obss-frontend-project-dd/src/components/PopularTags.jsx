import React, { useEffect, useState } from "react";
import "./../assets/css/popularTags.css";
import { connect } from "react-redux";
import axios from "axios";

const getTagss = () => {
  return axios
    .get("https://api.realworld.io/api/tags")
    .then((response) => response)
    .catch((error) => error);
};

const PopularTags = (props) => {
  const [refresh, setRefresh] = useState(false);
  const [tags, setTags] = useState();
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const data = await getTagss();
    if (data) {
      console.log(data.data.tags);
      setTags(data.data.tags);
      setRefresh(!refresh);
    }
  };
  return (
    <div className="right-sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {tags &&
          tags.map((tags) => {
            console.log(tags);
            return <button className="tag">{tags}</button>;
          })}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     tags: state.tags,
//   };
// };

export default PopularTags;
//export default connect(mapStateToProps, { getTags })(PopularTags);
