const SortPopular = (datas, limit = null) => {
  const dataWithCommentsCount = datas.map(({ _id, post, commentItems, createPostDate }) => {
    return {
      id: _id,
      post,
      commentsCount: commentItems.length,
      createPostDate
    }
  }).filter((data) => data.commentsCount > 0);
  dataWithCommentsCount.sort((a, b) => b.commentsCount - a.commentsCount);

  if (limit) {
    return dataWithCommentsCount.slice(0, dataWithCommentsCount.length > limit ? limit : dataWithCommentsCount.length);
  }

  return dataWithCommentsCount;
}

export default SortPopular;