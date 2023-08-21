type Props = {
  children: React.ReactNode;
};

export default function PostsPlaceholders({ children }: Props) {
  return (
    <article className="mb-8 mx-2 rounded-md w-full animate-pulse">
      <div className="flex items-center space-x-6 mb-2">
        <div className="w-12 h-12 rounded-full bg-gray-400 mr-3"></div>
        <div className="h-2 mr-3 w-20 rounded-xl bg-gray-400"></div>
        <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
      </div>
      <div className="w-full h-24 bg-gray-400 mb-5"></div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      </div>
      <div className="px-4 flex items-center space-x-2 mb-4">
        <div className="w-16 h-2 rounded-lg bg-gray-400"></div>
        <div className="w-20 h-2 rounded-xl bg-gray-200"></div>
      </div>
      {children}
      <div className="flex space-x-4 items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <div className="h-3 w-20 rounded-lg bg-gray-200"></div>
        <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
      </div>
    </article>
  );
}
