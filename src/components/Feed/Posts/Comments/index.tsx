import useRetrieveData from "@/hooks/use-retrieve-data";
import Moment from "react-moment";
import Image from "next/image";
import { RetrievedComment } from "@/types";

type Props = {
  id: string;
};

const Comments = ({ id }: Props) => {
  const { retrievedData: comments } = useRetrieveData("comments", id) as {
    retrievedData: RetrievedComment[];
  };

  return (
    <section className="mx-4 max-h-24 overflow-y-auto sm:scrollbar-w-2 scroll-parent">
      {comments.length > 0 &&
        comments.map((comment) => (
          <article key={comment.id}>
            <div className="flex items-center space-x-2 mb-2">
              <Image
                src={comment.userImg}
                alt={comment.userName}
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <p className="font-semibold flex-1">{comment.userName}</p>
              <Moment fromNow className="text-sm text-gray-500">
                {comment.timestamp?.toDate()}
              </Moment>
            </div>
            <p className="text-sm text-wrap line-clamp-4 break-all ml-14 indent-4">
              {comment.comment}
            </p>
          </article>
        ))}
    </section>
  );
};

export default Comments;
