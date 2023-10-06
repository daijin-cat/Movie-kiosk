/*
* 영화예매 웹 키오스크 메인 페이지
1. "화면을 눌러 시작하세요" 문구가 나타난다.
2. 오른쪽 상단에 매우 작게 "관리자 전환" 버튼이 있다.
3. 화면을 누르면 영화목록 페이지로 이동한다. (MovieSelectionPage.js)
4. 관리자 전환 버튼을 누르면 관리자 페이지로 이동한다. (AdminPage.js)
5. 화면은 키오스크에 따라 반응형으로 보여진다.
6. css는 style폴더의 MainPage.css이다.
*/ 

import React from 'react';
import { Link } from 'react-router-dom';
import './style/MainPage.css';

class MainPage extends React.Component {
    render() {
        return (
        <div className="main-page">
            <div className="main-page__title">화면을 눌러 시작하세요</div>
            <Link to="/movie-selection">
            <div className="main-page__button">영화선택</div>
            </Link>
            <Link to="/admin">
            <div className="main-page__admin-button">관리자 전환</div>
            </Link>
        </div>
        );
    }
    }

export default MainPage;