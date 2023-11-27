import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IoIosArrowUp } from "react-icons/io";
import "./Collapse.scss";

export function Collapse ({ title, content }) {
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()

  const refHeight = useRef()

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [toggle])

  const toggleState = () => {
    setToggle(!toggle);
  }

  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <h2>{title}</h2>
        <IoIosArrowUp
          className={toggle ? "active" : ""}
          id="arrow"
          alt="Arrow"
        />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{content}</p>
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}

export default Collapse
