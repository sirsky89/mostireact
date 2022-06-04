import React from 'react';
import axios from "axios";

class RemoteData extends React.Component {
    state = {  
        remoteData : []
    } 

    componentWillMount(){
        console.log("Component will be mounted now....")
        this.loadDataFromAPI()
    }


    loadDataFromAPI = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                console.log(this.state.remoteData)
                this.setState({remoteData: response.data})
                console.log(this.state.remoteData)
            })
            .catch((error)=>{})
    }

displayRemoteData=()=>{
    return this.state.remoteData.map((value)=>{
        return(
            <li>{value.title}</li>
        )
    })
}

    render() { 
        return (
            <div>
                <h1>Load data from API....now....again...</h1>
                <ol>
                     {this.displayRemoteData()}
                </ol>
               
            </div>
            
        );
    }
}
 
export default RemoteData;