import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import GroupCard from "../components/GroupCard";
import GroupCreateFormPopup from '../components/GroupCreateFormPopup'
import "./Groups.css";
import groupData from "../mockdata/groupData"

export default function Groups(){

  const [listOfGroups, setListOfGroups] = useState([]);
  const [filteredListOfGroups, setFilteredListOfGroups] = useState([]);

  const [formPopup, setFormPopup] = useState(false);
  const handleClose = () => setFormPopup(false);
  const handleShow = () => setFormPopup(true);

  useEffect(() => {
    // fetch('127.0.0.1:5000/groups/get_all', {method:'GET'})
    // .then(response => response.json())
    // .then(json => {
    //   setListOfGroups(json.groups_get_all);
    //   setFilteredListOfGroups(json.groups_get_all);
    // })
    setListOfGroups(groupData.groups);
    setFilteredListOfGroups(groupData.groups);
  }, []);

  function filterSearch(e) {
    if (e.target.value !== "") {
      let filtered = listOfGroups.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredListOfGroups(filtered);
    } else {
      setFilteredListOfGroups(listOfGroups);
    }
  }

  return (
    <div className="Groups">
      <div className="header"><h1>Groups</h1></div>
      <div className="description">
        <p>Total Number of Groups: {listOfGroups.length}</p>
        {listOfGroups.filter(i => i.space <= 0).length > 0 ? 
          <p>{listOfGroups.filter(i => i.space <= 0).length} group(s) with unallocated hacking space.</p>
          :
          <></>
        }
      <div className="button-container">
        <Button onClick={handleShow}>Create Group</Button>
      </div>
      </div>
      <div className="list-container">
        <div className="search-container">
          <input type="text" className="search" onChange={filterSearch} placeholder="Search..."/>
        </div>
        <div className="topbar">
          <span>Group Name</span>
          <span>Hacking Space</span>
        </div>
        <div className="result-container">
          {filteredListOfGroups.map((p) => 
            <GroupCard key={p.name} item={p} />
          )}
        </div>
      </div>
      <GroupCreateFormPopup show={formPopup} handleClose={handleClose}/>
    </div>
  )
}