document.querySelector('.btn').addEventListener('click', () => {
  const form = document.querySelector('.login-form')
  const data = serialize(form, { hash: true, empty: true })
  console.log(data)
  axios({
    url: '/v1_0/authorizations',
    method: 'POST',
    data
  }).then(result => {
    myAlert(true, '登录成功')
    console.log(result)

    localStorage.setItem('token', result.data.token)
    setTimeout(() => {
      location.href = '../content/index.html'
    }, 1500)
  }).catch(error => {
    myAlert(false, error.response.data.message)
    console.dir(error.response.data.message)
  })
})