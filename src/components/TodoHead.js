import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    font-size: 21px;
    color: #868e96;
  }

  .task-left {
    margin-top: 40px;
    font-size: 18px;
    color: #20c997;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2020년 4월 12일</h1>
      <div className="day">일요일</div>
      <div className="task-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
