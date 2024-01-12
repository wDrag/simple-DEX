import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSelectedPage = () => {
  const navigate = useNavigate();

  const [Page, setPage] = useState("");

  const changePage = (page) => {
    setPage(page);
    navigate(`/${page}`);
  };

  return {
    Page,
    changePage,
  };
};

export default useSelectedPage;
