
import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='97b5428f-ec27-456a-b89c-ef1eb965864f'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        ></PrettyChatWindow>
    </div>
    )

            


   
  };
  export default ChatsPage;