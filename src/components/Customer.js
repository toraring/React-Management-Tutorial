import React from "react";

class Customer extends React.Component{ 
    //고객이 리엑트의 컴포넌트를 상속받는 것
    render(){ //render는 항상 수행되는 내용
        //고객 정보 쓰기
        //props은 계층적으로 출력되게끔
        return(
        <div> 
            <CustomerProfile id={this.props.id} 
                image={this.props.image} 
                name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday}
                gender={this.props.gender}/>
        </div>
        )
    }   
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.image} alt='profile'/>
                <h2>{this.props.name}({this.props.id}</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>   
            </div>
        )
    }
}
export default Customer;