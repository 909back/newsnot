/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    return [{
      source:'/api/films',
      destination: 'https://ghibliapi.herokuapp.com/films'
    }]
  }
}

module.exports = nextConfig
