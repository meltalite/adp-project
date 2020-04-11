import React, { useRef, useEffect, useState } from 'react';
import './search-bar.scss'
import { Tooltip } from 'reactstrap';
import MaginifierSvg from '../../../assets/svg/magnifier.svg';

export default function SearchBar() {
  const searchNode = useRef()
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    const node = searchNode.current
    let keyword = ''
    let queue = []
    let scrollIndex = 0

    function searchKeyword(text) {
      const pattern = new RegExp(text, 'gi');
      var queue = []
      document.querySelectorAll(".page-section").forEach(section => {
        var markedParas = []
        section.querySelectorAll("p").forEach(paragraph => {
          const paraText = paragraph.innerText;
          const paraHtml = paragraph.innerHTML;

          let match
          if ((match = pattern.exec(paraText)) != null) {
            const replacement = `<span style="background-color:#FFFF00">${match[0]}</span>`
            const markedHtml = paraHtml.replace(pattern, replacement)
            const originalHTML = paragraph.innerHTML
            paragraph.innerHTML = markedHtml
            markedParas.push({ paragraph, originalHTML })
          }
        })

        if(markedParas.length > 0) {
          queue.push([section, markedParas])
        }
      })

      return queue
    }

    function scroll(queue, scrollIndex) {
      if (queue.length > 0) {
        const [div] = queue[scrollIndex]
        div.scrollIntoView()
        div.focus()
        if(queue.length - 1 > scrollIndex) {
          scrollIndex = scrollIndex + 1
        } else {
          scrollIndex = 0
        }
      }
      return scrollIndex;
    }

    function resetSearch() {
      queue.forEach(q => {
        const [, m] = q
        m.forEach(p => {
        const { paragraph, originalHTML } = p
        paragraph.innerHTML = originalHTML
        })
      })
      queue = []
      scrollIndex = 0
    }

    function keypressListener(e) {
      if (e.key === 'Enter') {
        const text = node.value.trim()
        if (text === '') {
          keyword = ''
          resetSearch()
        } else if (text !== keyword) {
          keyword = text
          resetSearch()
          queue = searchKeyword(keyword, queue)
          scrollIndex = scroll(queue, scrollIndex)
        } else if (text === keyword) {
          scrollIndex = scroll(queue, scrollIndex)
        }
      }
    }

    node.addEventListener('keypress', keypressListener)
    return () => {
      node.removeEventListener('keypress', keypressListener)
    }
  }, [])


  return (
    <>
      <input
        ref={searchNode}
        type="text"
        className='nav-menu__search-input'
        placeholder=' '
        id='search-bar'
      />
      <Tooltip placement='bottom' isOpen={tooltipOpen} target='search-bar' toggle={toggle}>Search your text here</Tooltip>
    </>
  )
}