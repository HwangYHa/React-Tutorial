// import: 특정한 라이브러리를 불러올때 사용되는 문법 
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/* 구조화 작업*/
// Customer는 React의 Component 형태로 작성된 클래스
// React의 Component는 일종의 라이브러리이자 클래스라고 할수 있다
// React.Component 상속받아서 Customer의 하나의 Component를 정의할수 있다
class Customer extends React.Component {    // props는 React.Component가 포함하고 있다
    // React.Component에는 render()라는 함수가 포함
    render() {  // Customer라는 Component를 실제 화면에 그리고자할때 사용
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
            // 처리해야할 데이터가 많은 경우에는 분리(계층적으로) 
            // 관리하기 쉽고, 생산성이 좋아진다
        )

    }
}

// export: 다른 Component에서 또 다른 Component를 사용하기 위해 내보내기, 즉 export 할수 있어야 한다.
export default Customer;