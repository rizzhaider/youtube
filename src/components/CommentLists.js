import {memo} from 'react'
import Comment from './Comment'

const CommentLists = ({comments}) => {
    console.log("comment lists render")
    return <div>
    {
        comments.map((comment, i) => {
            return <div key={i}>
                <Comment data={comment} />
                <div className='pl-5 border border-l-red-700'>
                    <CommentLists comments={comment.replies} />
                </div>

            </div>
        })
    }
</div>
}

export default memo(CommentLists);