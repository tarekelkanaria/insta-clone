type Props = {
  children: React.ReactNode;
};

export default function PostsPlaceholders({ children }: Props) {
  return (
    <article className="mb-5 mx-2 rounded-md w-full animate-pulse">
      <div className="flex items-center mb-2">
        <div className="w-12 h-12 rounded-full bg-gray-400 mr-3"></div>
        <div className="h-2 mr-3 flex-1 rounded-xl bg-gray-400"></div>
        <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
      </div>
      <div className="w-full h-24 bg-gray-400 mb-2"></div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        </div>
        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
      </div>
      <div className="px-4 flex items-center space-x-2 mb-2">
        <div className="w-20 h-2 rounded-lg bg-gray-400"></div>
        <div className="w-24 h-2 rounded-xl bg-gray-200"></div>
      </div>
      {children}
      <div className="flex space-x-2 items-center mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        <div className="h-3 flex-1 rounded-lg bg-gray-200"></div>
        <div className="w-8 h-8 rounded-lg bg-gray-200"></div>
      </div>
    </article>
  );
}
