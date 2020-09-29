import React from 'react';
import { Accordion } from 'react-bootstrap';
import './App.css';
import Course from './Course';

class CourseArea extends React.Component {
  getCourses() {
    let courses = [];

    for(const course of Object.values(this.props.data)) {
      courses.push (
        <Course key={course.name} data={course}/>
      )
    }

    return courses;
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        <Accordion>
        {this.getCourses()}
        </Accordion>
      </div>
    )
  }
}

export default CourseArea;
