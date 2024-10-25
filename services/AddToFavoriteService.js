const AddToFavoriteService = () => ({

    async AddFavorites(deviceId,postId) {
        return await fetch(`https://api.kastamonutravelguide.com.tr:8080/api/v1/post/favorite?deviceId=${deviceId}&postId=` + postId)
    }
})

export default AddToFavoriteService
