import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import data from "../data.json";

export default function AutocompleteLink() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const title = state?.title;
  useEffect(() => {
    if (!title) {
      const key = id.split("-");
      const _id = key[key.length - 1];
      const title = data.find((item) => item._id === _id)?.title;
      if (title !== undefined)
        return navigate(
          `../display/${title.toLowerCase().replace(/\s+/g, "-")}-${_id}`,
          { state: { title } }
        );
      else {
        return navigate("../display/not-found", {
          state: { title: "Data not Found" },
        });
      }
    }
  }, []);
  return <h2>{title || "Loading"}</h2>;
}
