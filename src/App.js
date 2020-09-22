import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer'


const useStyles = makeStyles({
  root:{
    width:'100%',
    overflowX:"auto"
  },
  table:{
    minWidth: 1080
  }
})


const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '코오딩',
  'birthday' : '999999',
  'gender' : '남'
 },
 {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '뚜벅이',
  'birthday' : '878888',
  'gender' : '남'
 },
 {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '메롱',
  'birthday' : '567890',
  'gender' : '남'
 }
]

export default function App(){
  const classes = useStyles;
  return (
      <Paper className={classes.root}>
        <TableHead className={classes.table}>
          <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c =>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender}/>);})}
      </TableBody>
      </Paper>
  );
}
