import { useState } from "react"
import Addtodo from "./Addtodo"
import Header from '../Header';
import axios from "axios";
import { Button } from "react-bootstrap";
function Users(){
    let [user,adduser]=useState(["Abisha","Dhivya","Shali"])
    const togetdata=()=>{
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          }).then(function(response){
            console.log(response)
          }
          );
    }
    return(
        
        <>
            <Header/>
            <table className="table table-bordered" border={1}>
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u,i)=>(
                        <tr>
                            <td>{i+1}</td>
                            <td>{u}</td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
            <Addtodo items={user} setitems={adduser} />
            <br></br>
            <Button type="button" onClick={()=>togetdata()}>get</Button>
        </>
    )
}
export default Users