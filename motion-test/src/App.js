import './App.css';


const list = [
  {
    title: 'React',
    url: 'http://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'http://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


function getTitle(title) {
  return title;
}

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'http://reactjs.org/',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      tite: 'Redux',
      url: 'http://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const handleChange = event => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />
      <List list={stories} />
    </div>
  );
}


const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author} </span>
      <span> {item.num_comments} </span>
      <span> {item.points} </span>
    </div>
  ));


export default App;


