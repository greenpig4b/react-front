import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {

  
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Link to="/" className="navbar-brand">
          블로그홈
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            {/* 문법에 문제는 없음 ()없어도 괜찮음 -> store 값 바뀌면 그림이 다시 그려진다. 젼역상태는 store 관리*/ }
            {isLogin ? 
                <>
                  <Link to="/saveForm" className="nav-link"> 글쓰기</Link>
                  <Link className="nav-link">로그아웃</Link> 
                </>
             : 
                <>
                <Link to="/loginForm" className="nav-link">로그인</Link>
                <Link to="/joinForm" className="nav-link">회원가입</Link>
                </>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;