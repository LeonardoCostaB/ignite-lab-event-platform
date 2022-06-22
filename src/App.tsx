import { gql, useQuery } from '@apollo/client';
import { client } from './lib/apollo';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id,
      title
    }
  }
`

interface LessonParams {
  id: string;
  title: string;
}


export function App() {
  const { data } = useQuery<{ lessons: LessonParams[] }>(GET_LESSONS_QUERY)

  

  return (
    <ul>
      { data?.lessons.map(({ id, title }) => {
        return <li key={id}>
          {title}
        </li>
      })

      }
    </ul>
  )
}
