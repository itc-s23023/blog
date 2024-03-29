import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})

const getPostBySlug = async slug => {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` }
    })
    return post.contents[0]
  } catch (err) {
    console.log(err)
  }
}

const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit }
    })
    return slugs.contents
  } catch (err) {
    console.log('~~ getAllSlugs ~~')
    console.log(err)
  }
}

//import { client } from './contentful'

async function getAllPosts (limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      limit: limit
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
    throw err
  }
}

const getAllCategories = async (limit = 100) => {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit
      }
    })
    return categories.contents
  } catch (err) {
    console.log('~~ getAllCategories ~~')
    console.log(err)
  }
}
const getAllPostsByCategory = async (catID, limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit
      }
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(err)
  }
}
/*const getAllPosts(limit = 100) {
try {
const posts = await client.get({
  endpoint: 'blogs',
queries: {
  fields: 'title,slug,eyecatch',
orders: '-publishDate',
limit: limit,
},
})
return posts.contents
} catch (err) {
console.log('~~ getAllPosts ~~')
console.log(err)
}
}*/

export { getAllPosts }
export { getAllSlugs }
export { getPostBySlug }
export { getAllCategories }
export { getAllPostsByCategory }
