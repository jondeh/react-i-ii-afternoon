import React, {Component} from 'react'

function Item(props){
    const {people} = props;

        
        return(
            <div className="wrapper">
            <header>
            <div className="home"><h2>Home</h2></div>
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
                  <div className="page"><b>{pageNumber}/25</b></div>
              </div>
              
              <div className="bodyMain">
                  <div className="list-1">
                  
    <div className="inLine">
        <h2 className="bold">From:</h2>
        <div>
          {arrayList[pageNumber-1].city}, 
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
                <button className="previous"> <b>&lt; PREVIOUS </b></button>
                <div className="nav">
                  <button className="navButts"><b>EDIT</b></button>
                  <button className="delete"><b>DELETE</b></button>
                  <button className="navButts"><b>NEW</b></button>
                </div>
                <button 
                    className="next"
                    onClick={this.props.nextHandler}><b>NEXT &gt;</b></button>
              </div>
        </div>
            
          </main>
          </div>
        )
    }



export default Item
































// import React, {Component} from 'react'

// class ListItem extends Component {
//     constructor(){
//         super()
//             this.state = {
//                 listItem: ''
//             }
//     }

//     render(){
//         return(
//             <div className="list-item">
//                 <div className="bodyMain">
//                   <div className="list-1">
                    
//     <h3>From:</h3><span>{this.props.movie.country}</span>
//     <h3>Job Title:</h3><span>{this.props.movie.title}</span>
//     <h3>Employer:</h3><span>{this.props.movie.employer}</span>
                    
//                   </div>
//                   <div className="list-2">

//                     <h3>Favorite Movies:</h3>
//                     <div className="movies">
//                       <p>1. {this.props.movie.favoriteMovies[0]}</p>
//                       <p>2. {this.props.movie.favoriteMovies[1]}</p>
//                       <p>3. {this.props.movie.favoriteMovies[2]}</p>
//                     </div>

//                   </div>
//               </div>
//             </div>
//         )
//     }
// }

// export default ListItem
































