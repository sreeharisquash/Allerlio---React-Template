import React from "react";
import "./SearchPopup.css";
import { motion, AnimatePresence } from "framer-motion";

const SearchPopup = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-popup visible"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchPopup;
