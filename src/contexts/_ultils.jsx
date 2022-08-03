import { toast } from 'react-toastify'

export const renderErrors = (err) => {
  // eslint-disable-next-line no-console
  console.log(err.response)

  switch (err.response.status) {
    case 401: {
      toast.error('Unauthorized Access')
      break
    }
    case 404: {
      toast.error(err.response.data.message)
      break
    }
    case 406: {
      err.response.data.errors.forEach((error) => {
        toast.error(error.msg)
      })
      break
    }
    default: {
      toast.error('Something wrong with the server !')
    }
  }
}
