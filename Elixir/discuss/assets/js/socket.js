// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "assets/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/web/endpoint.ex":
import {Socket} from "phoenix"


// Now that you are connected, you can join channels with a topic:
const createSocket = (topicId) => {
  let socket = new Socket("/socket", {params: {token: window.userToken}})


  socket.connect()
  let channel = socket.channel(`comments:${topicId}`, {})
  channel.join()
    .receive("ok", resp => { 
      renderComments(resp.comments);
    
    })
    .receive("error", resp => { console.log("Unable to join", resp) });
  
  channel.on(`comments:${topicId}:new`, renderComment);

  document.querySelector('button').addEventListener('click', function(){
    const content = document.querySelector('textarea').value;
    channel.push('comment:add', {content: content})
  });
}

function renderComments(comments){
  const cmts = comments.map(comment => {
    let email = "Anonymous"
    if (comment.user) { email = comment.user.email; }

    return `
      <li class="collection-item">
        ${comment.content}
        <div class="secondary-content">
        ${email}
        </div>
      </li>

    `;
  })

  document.querySelector('.collection').innerHTML = cmts.join('')
  
}

function renderComment(event) {
  // template = `<li class="collection-item">
  //             ${comment.content}
  //            </li>`
  document.querySelector('.collection').innerHTML += `<li class="collection-item">
                                                        ${event.comment.content}
                                                       </li>`;
}

window.createSocket = createSocket;

// export default socket
