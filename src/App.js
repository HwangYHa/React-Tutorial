import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';
//import { spacing } from '@material-ui/system';


const styles = theme => ({
  root: {
    width : '100%',
    // marginTop: spacing.uiot * 3,
  },
  table: {
    manWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '황용하',
    'birthday': '930907',
    'gender': '남성',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '910907',
    'gender': '남성',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '920907',
    'gender': '남성',
    'job': '사업가'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (
                  <Customer key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

  export default withStyles(styles)(App);