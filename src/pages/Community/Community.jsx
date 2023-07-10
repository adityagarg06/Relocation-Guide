import React, { useState, useEffect } from 'react';
import './Community.css';

function Community() {
  const [residents, setResidents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResidents, setFilteredResidents] = useState([]);

  const fetchResidents = async () => {
    try {
      const response = await fetch('/residents');
      const data = await response.json();
      setResidents(data);
      setFilteredResidents(data); // Initialize the filtered residents with all residents initially
    } catch (error) {
      console.error('Error fetching residents:', error);
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();

    const filteredResidents = residents.filter((resident) =>
      resident.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredResidents(filteredResidents);
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  return (
    <div className="wrapper2">
      <div className="main">
        <div className="navbar2">
          <div className="logo">BLUELEARN</div>
        </div>
        <div className="info">
          <div className="head">
            <h3>
              CONNECT WITH YOUR <span>COMMUNITY</span> HERE
            </h3>
            <form className="search" onSubmit={searchHandler}>
              <input
                type="text"
                name="search"
                placeholder="SEARCH HERE...."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <input type="submit" value="SEARCH" />
            </form>
            <ul style={{ marginTop: '100px', display: 'flex' }}>
              {filteredResidents.map((resident) => (
                <li key={resident.id} type="none" style={{ marginLeft: '450px' }}>
                  Name: {resident.username}, Email: {resident.email}, Country: {resident.country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
