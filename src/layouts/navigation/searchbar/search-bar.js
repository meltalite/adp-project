import React, { useRef, useEffect } from 'react';
import './search-bar.scss'

export default function SearchBar() {
  const searchNode = useRef()

  useEffect(() => {
    const node = searchNode.current
    let keyword = ''
    let queue = []
    let scrollIndex = 0

    function searchKeyword(text, queue) {
      const pattern = new RegExp(text, 'gi');
      queue = []

      const divs = document.getElementsByClassName("page-section");
      for (var i = 0; i < divs.length; i++) {
        const para = divs[i].getElementsByTagName("p");
        const paraText = para[0].innerText;
        const paraHtml = para[0].innerHTML;

        var matched = []
        let match
        if ((match = pattern.exec(paraText)) != null) {
          const replacement = `<span style="background-color:orange">${match[0]}</span>`
          const markedHtml = paraHtml.replace(pattern, replacement)
          para.innerHTML = markedHtml
        }
        queue.push([divs[i], para[0], paraHtml, matched])
      }

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

    function keypressListener(e) {
      if (e.key === 'Enter') {
        const text = node.value.trim()
        if (text === '') {
          keyword = ''
          queue = []
          scrollIndex = 0
        } else if (text !== keyword) {
          keyword = text
          queue = []
          scrollIndex = 0
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
        placeholder="&#128269;"
      />
    </>
  )
}