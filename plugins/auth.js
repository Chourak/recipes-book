export default function ({ $auth }) {
  $auth.onRedirect((to, from) => {
    // eslint-disable-next-line
    console.error(to)
    to = from
  })
}
