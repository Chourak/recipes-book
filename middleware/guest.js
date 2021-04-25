export default function ({ $strapi, redirect }) {
  if ($strapi.user && $strapi.user.confirmed) {
    return redirect('/')
  }
}
