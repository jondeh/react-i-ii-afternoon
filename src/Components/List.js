import React, {Component} from 'react'
import data from '../data'
import Person from './Person'
import '../App.css'
import DelPage from './DelPage'

class List extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            pageNumber: 1,
        }
        this.updateNext = this.updateNext.bind(this)
        this.updatePrev = this.updatePrev.bind(this)
        this.handleHome = this.handleHome.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    updateNext(num, arr){
        if(num < arr.length){
            this.setState({pageNumber: num+1})
    }
}

    updatePrev(num){
        if(num > 1){
            this.setState({pageNumber: num-1})
        }
    }

    handleHome(){
        this.setState({
            pageNumber: 1})
    }

    handleDelete(num, arr){
        let newArr = arr;
        if(arr.length < 2){
            return alert('Oops! You deleted everything! Time for a spankin!')
        }
        if(arr.length === num){
            newArr.splice(num-1, 1);
            this.setState({
                data: newArr,
                pageNumber: num-1
            })  
        } else {
        newArr.splice(num-1, 1);
        this.setState({
            data: newArr,
            pageNumber: num
        })
        }
    }
    
    handleNew(){

    }
    
    render(){
        return(
            <div className="List">
                <Person 
                    arrayList={this.state.data}
                    pageNumber={this.state.pageNumber}
                    display={this.state.display}
                    updateNextFn={this.updateNext}
                    updatePrevFn={this.updatePrev}
                    handleHomeFn={this.handleHome}
                    handleEditFn={this.handleEdit}
                    handleDeleteFn={this.handleDelete}
                    handleNewFn={this.handleNew}
                    />
            </div>
        )
    }
}

export default List;







































































// import React, {Component} from 'react'
// import data from '../data'
// import ListItem from './ListItem'

// class List extends Component {
// constructor(){
//     super()
//     const newArr = data.map((e, i) => <ListItem nextHandler={this.nextHandler} key={i} movie={e}/>);

//         this.state = {
//             list: data.map((e, i) => <ListItem nextHandler={this.nextHandler} key={i} movie={e}/>),
//             page: newArr[0]
//         }
//         // this.nextHandler = this.nextHandler.bind(this)
// }


// // nextHandler(e){
// //     // e.preventDefault();
// //     let myIndex = this.props.i;
// //     console.log(myIndex)
// //     // this.setState({page: myIndex+1})
// // }


//     render(){
//         // const newDisplay = this.state.list.map((e, i) => <ListItem key={i} movie={e}/>)
//         // console.log(this.state.data)
//         return(
//             <div>
//                 {this.state.page}
//             </div>
//         )
//     }
// }

// export default List