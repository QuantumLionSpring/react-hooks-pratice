import React, {useEffect,  useState} from "react";
import './App.css';

function App() {
    const [data,setData] = useState([]);



useEffect(() =>{
    fetch(`https://api.github.com/users`)
        .then(response => response.json())
        .then(setData)
})



//   const [name,SetName] = useState("Jan")
//     const [admin,SetAdmin] =useState(false)
// useEffect(() =>{
//     document.title=`Celebrate ${name}`;
// },)
//     useEffect(() =>{
//         console.log(`the user is: ${admin? "admin" :" not admin"}.`)
//     })


    // const [status,setStatus] = useState("not delivered");
    // console.log(status);
    // const [checked,setChecked] = useState(false);

  // return (
//     <div className="App">
//
//
//
// {/*        <p>Congralutations {name}!</p>*/}
// {/*        <button onClick={() =>{*/}
// {/*            SetName("Will")*/}
// {/*        }}>*/}
// {/*            Change Winner*/}
// {/*        </button>*/}
// {/*<p>{admin ? "logged in " : "not logged in"}</p>*/}
// {/*        <button onClick={() => SetAdmin(true)*/}
// {/*        }>Log in</button>*/}
// {/*/!*<h1>Hello {status}</h1>*!/*/}
// {/*/!*        <button onClick={() => setStatus("Delivered")}>Deliver</button>*!/*/}
// {/*/!*        <input type="checkbox"*!/*/}
// {/*/!*               value={checked}*!/*/}
// {/*/!*        onChange={()=>setChecked(!checked)}*!/*/}
// {/*/!*        />*!/*/}
// {/*/!*        <p>{checked ? "checked" : "not checked"}</p>*!/*/}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//     </div>
      if(data){
         return(
          <ul>
              {data.map((user) => (
                  <li>{user.login}</li>
              ))}
          </ul>
         );
}




    return <p>No Users</p>;
}

export default App;
