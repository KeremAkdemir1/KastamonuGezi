const PostService = () => ({

    async getAllPosts(params) {
        const requestOptions = {
            method: 'POST',
        };
        return await fetch('https://api.kastamonutravelguide.com.tr:8080/api/v1/post/all?&languageCode=' + params,requestOptions)
    }
})

export default PostService
