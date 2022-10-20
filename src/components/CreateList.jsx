import { useState, useEffect } from "react"
import axios from 'axios'

export default function CreateList() {

    const api = process.env.REACT_APP_API
    
    const [teamsData, setTeamsData] = useState([])
    const [positionsData, setPositionsData] = useState([])
    const [selectedTeam, setSelectedTeam] = useState('')

    const selectTeam = () => teamsData.map(el => <option key={el.id} value={el.name}>{el.name}</option>)
    
    const selectPosition = () => positionsData.map(el => {
        <option key={el.id} value={el.name}>{el.name}</option>
    })

    useEffect(() => {

        const fetchData = async () => {
            const teams = await (await axios.get(`${api}/teams`)).data.data         //may be an api mistake
            const positions = await (await axios.get(`${api}/positions`)).data.data
            console.log(positions)

            setPositionsData(positions)
            setTeamsData(teams)
        }

        fetchData()
    }, [api])

    return (
        <div className="Test">
            <h1>Here is list</h1>
            <form>
                {/* name input */}
                <input type='text' placeholder="სახელი"/>

                &nbsp;&nbsp;&nbsp;&nbsp;
                
                {/* surname inout */}
                <input type='text' placeholder="გვარი"/><br/>

                {/*team selection */}
                <select  value={'თიმი'} onChange={e => setSelectedTeam(e.target.value)}>
                    <option value='თიმი' disabled>თიმი</option>
                    {selectTeam()}
                </select>

                {/* position selection */}
                <select value={'პოზიცია'} onChange={e => console.log(e.target.value)}>
                    <option value='პოზიცია' disabled>პოზიცია</option>
                    {selectPosition()}
                </select>

                {/* email inout */}
                <input type='email' onChange={e => {console.log(e.target.value)}} /><br/>

                {/* tel inout */}
                <input type='tel'/>

            </form>
        
            {/* <p>{teamsData.map(el => <li>{el.name}</li>)}</p> */}
        </div>
    )
}