import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Venue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {

        const { venue} = data;

        setVenue(venue);
        setSchedule(data.schedules);
      });
  }, []);
  return (
    <>
      <div className="row m-auto p-5">
      
        <div className="shadow-dark m-auto p-5">
        <Link to="/venues" className="btn btn-success float-end">
          Back
        </Link>
        <h1 className="text-center m-4">{venue.building} Building</h1>
        <table className="table table-success">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Building</th>
              <th className="text-center">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{venue.id}</td>
              <td className="text-center">{venue.name}</td>
              <td className="text-center">{venue.building}</td>
              <td className="text-center">{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        </div>
        
        <h1 className="text-center mt-5">Schedules</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="fs-5">ID</th>
              <th className="fs-5">Course No.</th>
              <th className="fs-5">Description</th>
              <th className="fs-5">Teacher</th>
              <th className="fs-5">Schedule</th>
              <th className="fs-5">Size</th>
              
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule)?.map((sched, ids) => {
              return (
                <>
                  <tr key={ids}>
                    <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].teacher}</td>
                    <td>{schedule[sched].schedule}</td>
                    <td>{schedule[sched].size}</td>
                   
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </div>

    </>
  );
};

export default Venue;
