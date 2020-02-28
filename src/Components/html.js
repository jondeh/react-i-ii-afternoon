import React from 'react'
import List from './List'
// import '../App.css';



function Html(){

return(
    <div className ="parent">
        <header>
            <h2>Home</h2>
        </header>
          <main>
            
        <div className="body">
              <div className="bodyHead">
                  <div className="name"></div>
                  <div className="page"></div>
              </div>
              
              <div className="bodyMain">
                  <div className="list-1">
                    
    <h3>From:</h3><span>{this.props.movie.country}</span>
    <h3>Job Title:</h3><span>{this.props.movie.title}</span>
    <h3>Employer:</h3><span>{this.props.movie.employer}</span>
                    
                  </div>
                  <div className="list-2">

                    <h3>Favorite Movies:</h3>
                    <div className="movies">
                      <p>1. {this.props.movie.favoriteMovies[0]}</p>
                      <p>2. {this.props.movie.favoriteMovies[1]}</p>
                      <p>3. {this.props.movie.favoriteMovies[2]}</p>
                    </div>

                  </div>
              </div>
              
              <div className="bodyFoot">
                <div className="previous"></div>
                <div className="nav">
                  <div className="navButts"></div>
                  <div className="delete"></div>
                  <div className="navButts"></div>
                </div>
                <div className="next"></div>
              </div>
        </div>
            
          </main>
        </div>
    )
}

export default Html;




// function App() {
//     return (
//       <div className="App">
          
//           <header>
//               <h2>Home</h2>
//           </header>
//             <main>
//               <div className="body">
//                 <div className="bodyHead">
//                     <div className="name"></div>
//                     <div className="page"></div>
//                 </div>
//                 <div className="bodyMain">
//                     <div className="list-1">
                      
//                         <h3>From:</h3>
//                         <h3>Job Title:</h3>
//                         <h3>Employer:</h3>
                      
//                     </div>
//                     <div className="list-2">
  
//                       <h3>Favorite Movies:</h3>
//                       <div className="movies">
//                         <p>1.</p>
//                         <p>2.</p>
//                         <p>3.</p>
//                       </div>
  
//                     </div>
//                 </div>
//                 <div className="bodyFoot">
//                   <div className="previous"></div>
//                   <div className="nav">
//                     <div className="navButts"></div>
//                     <div className="delete"></div>
//                     <div className="navButts"></div>
//                   </div>
//                   <div className="next"></div>
//                 </div>
//               </div>
              
//             </main>
  
//       </div>
//     );
//   }