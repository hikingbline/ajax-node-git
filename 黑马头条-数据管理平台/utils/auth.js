//没有token就踢回去
const token = localStorage.getItem('token')
if (!token) {
  location.href = '../login/index.html'
}

//设置个人信息
axios({
  url: '/v1_0/user/profile'
}).then(result => {
  const username = result.data.name
  document.querySelector('.nick-name').innerHTML = username
})

//绑定点击事件 退出登录时全部清空
// 3.1 绑定点击事件
document.querySelector('.quit').addEventListener('click', e => {
  // 3.2 清空本地缓存，跳转到登录页面
  localStorage.clear()
  location.href = '../login/index.html'
})
