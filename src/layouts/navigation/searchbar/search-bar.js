import React, { useRef, useEffect } from 'react';
import './search-bar.scss'

export default function SearchBar() {
  const searchNode = useRef()

  useEffect(() => {
    searchNode.current.addEventListener('keypress', keypressListener)
    return () => {
      searchNode.current.removeEventListener('keypress', keypressListener)
    }
  }, [])

  const keypressListener = (e) => {
    if (e.key === 'Enter') {
      search(searchNode.current.value)
    }
  }

  const search = (text) => {
    const pattern = text

    var divs = document.getElementsByClassName("page-section");
    for (var i = 0; i < divs.length; i++) {
      var para = divs[i].getElementsByTagName("p");
      var index = para[0].innerText.indexOf(pattern);
      if (index !== -1) {
        const original = para[0].innerHTML;
        console.log(original)
        const replacement = `<span style="background-color:yellow">${pattern}</span>`
        const marked = original.replace(pattern, replacement)
        console.log(replacement)
        para[0].innerHTML = marked
        divs[i].scrollIntoView()
        break;
      }
    }
  }

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