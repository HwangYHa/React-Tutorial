import React, { Component } from 'react';
// Customer 클래스는 App의 클래스 외부에 있기때문에 import 해준다.
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/styles';

/*
 --- 리액트 컴퍼넌트 라이프 사이클 ---
1) constructor()

2) componentWillMount()

3) render() 그릴때 사용되는 함수

4) componentDidMount()

*/

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"

  },
  table: {
    minWidth: 1080
  }
};

// 리액트 App.js가 메인 JavaScpit를  관리할수 있다.
// html문서의 Body태그에 해당하는 App.js
// 현재 다루는 클래스는 CSS(디자인) 클래스이며, 자바스크립트의 클래스와는 다르다
// Component: 웹문서에서 어떠한 내용을 보여주기 위한 기본적인 단위.
//  App 우리의 웹프로그램 자체를 화면에 출력하기위해 Component로 만들어진것
// Component는 계층적으로 이루어지기때문에, Component안에 또 다른 Component들이 존재할수 있다.
class App extends Component {
// 처음에는 고객데이터는 비어있다가 서버로 부터 받으면 그때 데이터가 재구성
// Props는 Component에서 변경될수 없는 데이터를 처리할때 명시
// state는  Component에서 변경될수 있는 데이터를 처리할때 명시
  state = {
    customers: "",
    completed: 100
  }

  // 마운트 라이브러리: api 서버에 접근해서 데이터를 받아오는 작업
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);  // 0.02초마다 progress 실행되도록
    this.callApi()
      .then(res => this.setState({ customers: res })) // body변수가 callApi에 불러와줘서 then 함수하여 res이름으로 변수의 이름이 변경
      .catch(err => console.log(err));  // 오류 발생시 콘솔에 출력
  }

  // callApi 비동기적으로 어떤 내용을 수행
  callApi = async () => {
    // response: 접속하고자하는 api주소를 넣으면
    const response = await fetch('api/customers');
    const body = await response.json(); // json 형태로 받아서 body라는 변수에 담는다
    return body;  // body변수를 callApi에 반환
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props;
    return (
      // Paper는 Component의 외부를 감싸기 위한 Component의 중 하나
      // Paper 디자인으로 root 클래스를 사용/ Table 디자인으로 table 클래스를 사용
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
          {/* 하나의 행 정의 */}
            <TableRow>
              {/* 하나의 열 */}
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          {/* 실제로 사용자의 정보가 출력되는 부분은 테이블 바디로 감싸줘야한다 */}
          <TableBody>

          {/* this.state.customers의 값이 존재하는 경우에 수행 */}
            {this.state.customers ? this.state.customers.map(c => {
              return (
                /* map이라는 함수가 지원
                  customers는 현재 배열
                  배열의 각 원소에 어떠한 내용을 적용하고 싶을때 map을 사용
                  map을 사용시 , poxy를 사용해줘야한다*/
                // App Component안에 Customer가 포함된 형태로 화면에 출력
                // return문 안에 있어야 출력된다
                // 리액트에서는 데이터를 출력하고자할때는 props(속성)를 사용
                // 배열을 각 c 라는 원소로 
                <Customer key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            }) :
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="indeterminate" value={this.state.completed} />
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);