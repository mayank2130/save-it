// page.tsx
import React from 'react';
import {AssignTasks} from '@/components/testing/AssignTask';

const Page: React.FC = () => {
  return (
    <div>
      <h1>Task Assignment</h1>
      <AssignTasks />
    </div>
  );
};

export default Page;
