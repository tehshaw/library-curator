

async function newEventHandler(event_id) {
    
  
  const title = document.querySelector('.event-form-title');
  const description = document.querySelector('.event-form-description');
  
  
  
  
  
  
  const response = await fetch(`/api/events/` + event_id, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/librarian/events');
    } else {
      alert(response.statusText);
    }
  }
  
  // document.querySelector('.createPost').addEventListener(
  //   'click', newEventHandler) 
   
   