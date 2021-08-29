import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'F',
    'name': '황용하',
    'birthday': '930907',
    'gender': '남성',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '910907',
    'gender': '남성',
    'job': '개발자'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '920907',
    'gender': '남성',
    'job': '사업가'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  )
}

export default App;