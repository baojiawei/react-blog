import { CSSTransition } from 'react-transition-group';
import { Button, Alert ,List } from 'antd'
import { useState } from 'react';
import {VelocityComponent} from 'velocity-react'

export default () => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <List style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => {
            let f = !showMessage
            setShowMessage(f)
          }}
        >
          Show Message
        </Button>
      )}
      <VelocityComponent
        animation={{ opacity: 1 }} 
        runOnMount
        duration={1000}
      >
       <div style={{opacity: 0}}>测试一下行不行</div>
      </VelocityComponent>
    </List>
  );
}