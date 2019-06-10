'use strict';

function mouseOver(obj) {
    obj.style.color = 'red';
}

function mouseOut(obj) {
    obj.style.color = 'black';
}

const element1 = document.querySelectorAll('.myImg');
for (let i = 0; i <= element1.length; i++) {

    element1[i].addEventListener('mouseover', function () {
        element1[i].style.width='120%'
    },false);

    element1[i].addEventListener('mouseout', function () {
        element1[i].style.width='80%'
    },false);

    }



const divStyle = {
    color: 'white',
    margin: '10px',
    border: '1px dotted red'
};
const element = React.createElement;
class Login extends React.Component {
    render() {
        return (
            <li className={'myLogin'} style={divStyle}>Login</li>
        );
    }
}

const dom = document.getElementById('login');
ReactDOM.render(
    element(Login),
    dom
);



