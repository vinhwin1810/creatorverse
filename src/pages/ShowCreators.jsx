import { supabase } from "../client.js";
import { useState, useEffect } from "react";
import CreatorCard from "../components/CreatorCard.jsx";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select();

      if (error) {
        console.log(error.message);
        return;
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);
  console.log(creators);

  return (
    <>
      <h1>Creators</h1>
      <div>
        {creators.map((creator, id) => (
          <div key={id}>
            <CreatorCard creator={creator} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowCreators;
