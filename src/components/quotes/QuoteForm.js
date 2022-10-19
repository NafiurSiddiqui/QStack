import { useRef, useState } from 'react';
// import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    //validation
    if(enteredAuthor.length === 0 ){
      setBtnDisable(true);
      alert('Don\'t your favourite author deserves some credentials?');     
      return;
    }
    
    if(enteredAuthor.length === 0 ){
      setBtnDisable(true);
      alert('Don\'t your favourite author deserves some credentials? :/');     
      return;
    }

    if(enteredText.length === 0 ){
      setBtnDisable(true);
      alert('Your favorite author quoted nothing? :/');     
      return;
    }


    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
    
  };

  const formFocusedHandler = () => {
    setIsEntering(true);  
    setBtnDisable(false);
    
  };

  console.log(isEntering);


  return (
    <>    
      <Card>
        <form
          onFocus={formFocusedHandler}
          onBlur={()=> !isEntering && setBtnDisable(true)}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn' disabled={btnDisable} >Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
