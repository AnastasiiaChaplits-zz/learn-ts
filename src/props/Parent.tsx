import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('clicked')}>
      testtest
    </ChildAsFC>
  );
};

export default Parent;
