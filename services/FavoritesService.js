const PostService = () => ({

    async getAllPosts(id,params) {
        return await fetch(`https://api.kastamonutravelguide.com.tr:8080/api/v1/post/favoriteDeviceDetail?deviceId=${id}&languageCode=` + params)
    }
})

export default PostService
