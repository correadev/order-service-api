export default function makeListOrder ({ ordersDb }) {
  return async function listOrder ({ serviceType } = {}) {
    if (!serviceType) {
      throw new Error('Deve informar um tipo de serviço.')
    }
    const comments = await ordersDb.findByPostId({
      serviceType,
      omitReplies: false
    })
    const nestedComments = nest(comments)
    return nestedComments

    function nest (comments) {
      if (comments.length === 0) {
        return comments
      }
      return comments.reduce((nested, comment) => {
        comment.replies = comments.filter(
          reply => reply.replyToId === comment.id
        )
        nest(comment.replies)
        if (comment.replyToId == null) {
          nested.push(comment)
        }
        return nested
      }, [])
    }
  }
}
