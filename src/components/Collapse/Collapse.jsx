import { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { IoIosArrowDown } from "react-icons/io"
import "./Collapse.scss"

export function Collapse ({ title, content }) {
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()

  Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
  }

  const refHeight = useRef()

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [toggle])

  const toggleState = () => {
    setToggle(!toggle)
  }

  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        <h4>{title}</h4>
        <IoIosArrowDown
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
        <div aria-hidden={toggle ? "true" : "false"}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Collapse
