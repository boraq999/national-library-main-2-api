

const TestSec = ({service,index}) => {
console.log('service', service);
  const { title, description, icon, color, path } = service;


  return (
    <h3>{index}:{title}</h3>
  );
};

export default TestSec;