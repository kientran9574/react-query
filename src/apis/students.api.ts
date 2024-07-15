import { Student, Students } from 'types/student.type'
import http from 'utils/http'

export const getStudents = (page: string | number, limit: string | number) => {
  return http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
export const postStudents = (student: Omit<Student, 'id'>) => http.post<Student>("students", student)
