import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialWorkerList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Michael',
    email: 'michael@Scott.com',
    role: 'Boss',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialWorkerList })
  },
  post(url, { username, email, role }) {
    const newWorker = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newWorker })
  }
}
