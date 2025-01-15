import React from 'react';
import { Button, Card } from 'antd';
import 'antd/dist/reset.css';


const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to my React app with Ant Design</h1>
      <Card title="Ant Design Card" style={{ width: 300 }}>
        <p>This is an Ant Design Card component.</p>
        <Button type="primary">Ant Design Button</Button>
      </Card>
    </div>
  );
}

export default App;
