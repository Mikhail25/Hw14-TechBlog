const newCommentHandler = async (evt) => {
    evt.preventDefault();
    const postId = document.querySelector('#comment-submit').getAttribute('data-id');
    const content = document.querySelector('#comment-text-area').value;
  
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        content,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    //document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#comment-form')
    .addEventListener('submit', newCommentHandler);
  