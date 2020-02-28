import React from 'react'

function Person(props){
    const {arrayList, pageNumber, updateNextFn, updatePrevFn, handleHomeFn, handleEditFn, handleDeleteFn, handleNewFn} = props

    return(
        <div className="display">
            <header>
            <div className="home">
                <button 
                    className="homeButt"
                    onClick={handleHomeFn}><b>Home</b>
                </button>
            </div>
        </header>
          <main>
            
        <div className="body">
              <div className="bodyHead">
                  <div className="name">
                    <h1>
                      {arrayList[pageNumber-1].name.first}{' '}
                      {arrayList[pageNumber-1].name.last}
                    </h1>
                  </div>
                  <div className="page"><b>{pageNumber}/{arrayList.length}</b></div>
              </div>
              
              <div className="bodyMain">
                  <div className="list-1">
                  
    <div className="inLine">
        <h2 className="bold">From:</h2>
        <div>
          {arrayList[pageNumber-1].city}, { }
          {arrayList[pageNumber-1].country}
        </div>
    </div>
              
    <div className="inLine">
        <h2 className="bold">Job Title:</h2>
        <div>
          {arrayList[pageNumber-1].title}
        </div>
    </div>

    <div className="inLine">
        <h2 className="bold">Employer:</h2>
        <div>
          {arrayList[pageNumber-1].employer}
        </div>
    </div>
                    
                  </div>

                  <div className="list-2">
                    <h2>Favorite Movies:</h2>
                    <br />
                    <div className="movies">
                      <p>1. {arrayList[pageNumber-1].favoriteMovies[0]}</p>
                      <br />
                      <p>2. {arrayList[pageNumber-1].favoriteMovies[1]}</p>
                      <br />
                      <p>3. {arrayList[pageNumber-1].favoriteMovies[2]}</p>
                    </div>

                  </div>
              </div>
              
              <div className="bodyFoot">
                <button 
                    className="previous"
                    onClick={() => updatePrevFn(pageNumber)}> <b>&lt; PREVIOUS </b>
                </button>
                <div className="nav">

                  <button 
                  className="navButts"
                  onClick={handleEditFn}><b>EDIT</b>
                  </button>
                  
                  <button 
                    className="delete"
                    onClick={() => handleDeleteFn(pageNumber, arrayList)}><b>DELETE</b>
                  </button>
                  
                  <button 
                    className="navButts"><b>NEW</b>
                  </button>

                </div>
                <button 
                    className="next"
                    onClick={() => updateNextFn(pageNumber, arrayList)}><b>NEXT &gt;</b>
                </button>
              </div>
        </div>
            
          </main>

        </div>
    )
}

export default Person;
            
            
            
            
            
            
            // <div className="name">
            //     {arrayList[pageNumber-1].name.first}{' '}
            //     {arrayList[pageNumber-1].name.last}
            // </div>
            
            // <div className="location">
            //     {arrayList[pageNumber-1].city}, {arrayList[pageNumber-1].country}
            // </div>
           
            // <div className="title">
            //     {arrayList[pageNumber-1].title}
            // </div>
            
            // <div className="employer">
            //     {arrayList[pageNumber-1].employer}
            // </div>
            
            // <div className="movie1">
            //     {arrayList[pageNumber-1].favoriteMovies[0]}
            // </div>
            
            // <div className="movie2">
            //     {arrayList[pageNumber-1].favoriteMovies[1]}
            // </div>
            
            // <div className="movie3">
            //     {arrayList[pageNumber-1].favoriteMovies[2]}
            // </div>

            // <div className="pageNumber">
            //     {pageNumber}
            // </div>