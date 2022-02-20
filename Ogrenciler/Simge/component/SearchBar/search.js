import React from 'react'

const SearchBar = () => {
    const searchStyle = {
      width: "50%"
  }

  return (
      <div >
          <nav style={searchStyle}>
              <form className="form-inline justify-content-center">
                  <div className="input-group" style="flex-wrap: initial">
                      <input className="form-control mr-sm-2 searchbar" type="search" placeholder="Aradığınız ürün, kategori veya markayı yazınız" aria-label="Search"/>
                      <div className="input-group-append">
                          <button className="btn btn-outline-warning" type="button">
                              <i className="fas fa-search"></i>
                          </button>
                      </div>
                  </div>
              </form>
          </nav>
      </div>
  )
}


export default SearchBar;