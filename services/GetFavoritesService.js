const GetFavoritesService = () => ({

    async getAllFavorites(deviceId) {

        return await fetch('https://api.kastamonutravelguide.com.tr:8080/api/v1/post/favoriteDevice?&deviceId=' + deviceId)
    }
})

export default GetFavoritesService
