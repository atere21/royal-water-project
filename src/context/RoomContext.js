import React, { createContext, useContext, useEffect, useState } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms ] = useState(roomData) ; // Provide the actual room data here
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setkids] = useState('0 Kids'); // Use setKids instead of setkids
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, []);
  
  const handleclick = (e) => {
     e.preventDefault();
     setLoading(true);
    // console.log(total); 
    // console.log(rooms);

    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson
    });

    setTimeout(()=> {
      setRooms(newRooms);
      setLoading(false);
    }, 3000)
    

  
  }
   console.log(rooms)
  return (
    <RoomContext.Provider value={{rooms, adults, setAdults, kids, setkids,
    handleclick,loading }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
