import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: 'c6744bbb304f4dbf83f94c8a897d77af',
    channel: 'test',
    token: '007eJxTYND2v1MlN8vy8Mm9l7LOOO063fBw8tari3dGSW2Z4qFs5b9LgSHZzNzEJCkpydjAJM0kJSnNwjjN0iTZItHC0jzF3DwxbWn0orSGQEaGRd8WMjMyQCCIz8JQklpcwsAAAPXnIkQ=',
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default App;
