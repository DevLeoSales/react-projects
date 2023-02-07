const paginate = (followers) => {
    const itemsPerPage = 8
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)

    const NewFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        return followers.slice(start, start + itemsPerPage)
    })

    return NewFollowers
}

export default paginate
