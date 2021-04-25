const slugify = require('slugify')

export default (context, inject) => {
  inject('slugify', (slug) => slugify(slug))
}
