/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['placeholder.com'], // เพิ่มโดเมนที่คุณใช้สำหรับรูปภาพ
    },
}

module.exports = nextConfig