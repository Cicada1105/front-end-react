import React from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { HomeRouter } from '../Home/router.jsx'
import { CollegeRouter } from '../Colleges/router.jsx'
import { ConcentrationRouter } from '../Concentration/router.jsx'
import { CourseRouter } from '../Course/router.jsx'
import { DepartmentRouter } from '../Department/router.jsx'
import { PhraseRouter } from '../Phrase/router.jsx'
import { ProgramRouter } from '../Program/router.jsx'

//Include homepage for admin
//import App from '../App.jsx'

// Routing styles
import styles from '../../../templates/Default/View.module.css'

export class Routing extends React.Component {
  render() {
    return(
      <Router>
        <ul className={ styles.navbar }>
          <li style={{ float:"left" }}>
            <Link to="/Admin/Colleges/List" className={ styles.link }>Lewis University</Link>
          </li>
          <li style={{ float:"left" }}>
            <Link to="/Admin/Course/List" className={ styles.link }>Add User</Link>
          </li>
          {
            /******************/
            /*    Colleges    */
            /******************/
          }
          <li style={{ float:"left" }} className={ styles.dropdown }>
            <Link to="/Admin/Colleges/List" className={ styles.link }>Colleges</Link>
              <ul className={ styles.dropdownContent }>
                  <li>
                      <Link to="/Admin/Colleges/List">List</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Colleges/Add">Add</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Colleges/Edit">Edit</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Colleges/Delete">Delete</Link>
                  </li>
              </ul>
          </li>
          {
            /********************/
            /*    Department    */
            /********************/
          }
          <li style={{ float:"left" }} className={ styles.dropdown }>
            <Link to="/Admin/Department/List" className={ styles.link }>Department</Link>
              <ul className={ styles.dropdownContent }>
                  <li>
                      <Link to="/Admin/Department/List">List</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Department/Add">Add</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Department/Edit">Edit</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Department/Delete">Delete</Link>
                  </li>
              </ul>
          </li>
          {
            /*****************/
            /*    Program    */
            /*****************/
          }
          <li style={{ float:"left" }} className={ styles.dropdown }>
            <Link to="/Admin/Program/List" className={ styles.link }>Program</Link>
              <ul className={ styles.dropdownContent }>
                  <li>
                      <Link to="/Admin/Program/List">List</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Program/Add">Add</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Program/Edit">Edit</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Program/Delete">Delete</Link>
                  </li>
              </ul>
          </li>
          {
            /***********************/
            /*    Concentration    */
            /***********************/
          }
          <li style={{ float:"left" }} className={ styles.dropdown }>
            <Link to="/Admin/Concentration/List" className={ styles.link }>Concentration</Link>
              <ul className={ styles.dropdownContent }>
                  <li>
                      <Link to="/Admin/Concentration/List">List</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Concentration/Add">Add</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Concentration/Edit">Edit</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Concentration/Delete">Delete</Link>
                  </li>
              </ul>
          </li>
          {
            /****************/
            /*    Course    */
            /****************/
          }
          <li style={{ float:"left" }} className={ styles.dropdown }>
            <Link to="/Admin/Course/List" className={ styles.link }>Course</Link>
              <ul className={ styles.dropdownContent }>
                  <li>
                      <Link to="/Admin/Course/List">List</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Course/Add">Add</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Course/Edit">Edit</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Course/Delete">Delete</Link>
                  </li>
              </ul>
          </li>
          {
            /****************/
            /*    Phrase    */
            /****************/
          }
          <li style={{ float:"left" }} className={ styles.dropdown }>
            <Link to="/Admin/Phrase/List" className={ styles.link }>Phrase</Link>
              <ul className={ styles.dropdownContent }>
                  <li>
                      <Link to="/Admin/Phrase/List">List</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Phrase/Add">Add</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Phrase/Edit">Edit</Link>
                  </li>
                  <li>
                      <Link to="/Admin/Phrase/Delete">Delete</Link>
                  </li>
              </ul>
          </li>
          <li style={{ float:"left" }}>
            <Link to="" className={ styles.link }>Logout</Link>
          </li>
          {
          /************************/
          /*    Admin Home page   */
          /************************/
          }
          <li style={{ float:"right"}}>
            <Link to="/Admin/Home" className={ styles.link } >Home</Link>
          </li>
        </ul>

        {
          /********************/
          /*      Routes      */
          /********************/
        }
        {/* Admin Home Page*/}
        <HomeRouter />
        {/* Colleges  */}
        <CollegeRouter />
        {/* Department  */}
        <DepartmentRouter />
        {/* Program  */}
        <ProgramRouter />
        {/* Concentration  */}
        <ConcentrationRouter />
        {/* Course  */}
        <CourseRouter />
        {/* Phrase  */}
        <PhraseRouter />
      </Router>
    );
  }
}
