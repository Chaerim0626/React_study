//일기를 나중에 삭제 수정을 할 수 있기에 컴포넌트 다시 생성
const DiaryItem = ({
    onDelete,
    id,
    author,
    content,
    emotion,
    created_date
  }) => {
    return (
      <div className="DiaryItem">
        <div className="info">
          <span className="author_info">
            작성자 : {author} | 감정점수 : {emotion}
          </span>
          <br/>
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
        <button
          onClick={() => {
            if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
              onDelete(id);
            }
          }}
        >
          삭제하기
        </button>
      </div>
    );
  };
  
  export default DiaryItem;