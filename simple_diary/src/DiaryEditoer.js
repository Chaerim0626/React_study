import { useRef, useState } from "react";

const DiaryEditor = () => {
    const authorInput = useRef();
    //Dom요소에 접근
    const contentInput = useRef();
    
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            //현재 가리키는 객체를 가져와 포커스
            return;
        }
        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        alert("저장 성공!");
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    ref={authorInput}
                    value={state.author}
                    onChange={handleChangeState}
                    name="author"
                    placeholder="작성자"
                    type="text"/>
            </div>
            <div>
                <textarea
                    value={state.content}
                    onChange={handleChangeState}
                    name="content"
                    placeholder="일기"
                    type="text" />
            </div>
            <div>
                <span>오늘의 감정점수 : </span>
                <select name="emotion" value={state.emotion}
                    onChange={handleChangeState}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장</button>
            </div>
        </div>
    )

}

export default DiaryEditor